import { TextToSpeech } from '@capacitor-community/text-to-speech';

class SpeechService {
  private isSpeaking = false;
  private isPlatformApp = false;

  constructor() {
    this.detectPlatform();
  }

  private detectPlatform() {
    this.isPlatformApp = typeof window !== 'undefined' && 
      (window as any).Capacitor !== undefined;
  }

  async speak(text: string, rate: number = 0.6): Promise<void> {
    if (this.isSpeaking) {
      await this.stop();
    }

    this.isSpeaking = true;

    try {
      if (this.isPlatformApp) {
        await TextToSpeech.speak({
          text,
          lang: 'zh-CN',
          rate,
          pitch: 1.0,
        });
      } else if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        utterance.rate = rate;
        utterance.pitch = 1.0;

        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => 
          v.lang.includes('zh') && (v.name.includes('Xiaoxiao') || v.name.includes('Scenic'))
        );
        if (preferredVoice) utterance.voice = preferredVoice;

        utterance.onend = () => {
          this.isSpeaking = false;
        };
        utterance.onerror = () => {
          this.isSpeaking = false;
        };

        window.speechSynthesis.speak(utterance);
      } else {
        throw new Error('语音功能不可用');
      }
    } catch (error) {
      this.isSpeaking = false;
      console.error('Speech error:', error);
      throw error;
    }
  }

  async stop(): Promise<void> {
    this.isSpeaking = false;

    if (this.isPlatformApp) {
      await TextToSpeech.stop();
    } else if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  getIsSpeaking(): boolean {
    return this.isSpeaking;
  }
}

export const speechService = new SpeechService();