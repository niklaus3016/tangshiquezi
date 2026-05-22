import { Difficulty, Poem, UserLevel } from '../types';

const RAW_POEMS_DATA: Poem[] = [
  {
    id: 1,
    title: "静夜思",
    author: "李白",
    dynasty: "唐代",
    content: ["床前明月光", "疑是地上霜", "举头望明月", "低头思故乡"],
    paraphrase: "明亮的月光洒在床前，好像地上泛起了一层霜。抬头仰望天上的明月，低头思念远方的故乡。",
    difficulty: Difficulty.EASY
  },
  {
    id: 2,
    title: "登鹳雀楼",
    author: "王之涣",
    dynasty: "唐代",
    content: ["白日依山尽", "黄河入海流", "欲穷千里目", "更上一层楼"],
    paraphrase: "夕阳依傍着西山慢慢地沉没状态，滔滔黄河水向着大海滚滚东流。若想把千里的风光景物看个够，那就要拔足再登上一层高楼。",
    difficulty: Difficulty.EASY
  },
  {
    id: 3,
    title: "春晓",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["春眠不觉晓", "处处闻啼鸟", "夜来风雨声", "花落知多少"],
    paraphrase: "春日里贪睡不知不觉天已破晓，醒来只听到到处是鸟儿啼叫。想起昨夜里风雨交加声声入耳，不知道有多少花儿被打落在地。",
    difficulty: Difficulty.EASY
  },
  {
    id: 4,
    title: "鹿柴",
    author: "王维",
    dynasty: "唐代",
    content: ["空山不见人", "但闻人语响", "返景入深林", "复照青苔上"],
    paraphrase: "寂静的山中看不见人影，只听到有人说话的声音。落日的余晖返照入深林里，又照在幽暗处的青苔上面。",
    difficulty: Difficulty.EASY
  },
  {
    id: 5,
    title: "悯农",
    author: "李绅",
    dynasty: "唐代",
    content: ["锄禾日当午", "汗滴禾下土", "谁知盘中餐", "粒粒皆辛苦"],
    paraphrase: "农民辛勤锄禾正值中午，汗水滴落在禾苗下的土里。谁知道盘中的饭食，每一粒都是农民辛苦劳动的结晶。",
    difficulty: Difficulty.EASY
  },
  {
    id: 6,
    title: "江雪",
    author: "柳宗元",
    dynasty: "唐代",
    content: ["千山鸟飞绝", "万径人踪灭", "孤舟蓑笠翁", "独钓寒江雪"],
    paraphrase: "千山万岭不见鸟儿飞影，所有的路径都不见人的踪迹。孤零零的小船上一位披蓑戴笠的老翁，独自在大雪纷飞的寒江上垂钓。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 7,
    title: "相思",
    author: "王维",
    dynasty: "唐代",
    content: ["红豆生南国", "春来发几枝", "愿君多采撷", "此物最相思"],
    paraphrase: "红豆生长在遥远的南方，春天到了，又长出多少新枝。希望你多多采摘一些，因为它最容易引起人们的相思之情。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 8,
    title: "咏鹅",
    author: "骆宾王",
    dynasty: "唐代",
    content: ["鹅鹅鹅", "曲项向天歌", "白毛浮绿水", "红掌拨清波"],
    paraphrase: "鹅、鹅、鹅，弯着脖子向天唱歌。洁白的羽毛漂浮在碧绿的水面上，红红的脚掌拨动起清澈的水波。",
    difficulty: Difficulty.EASY
  },
  {
    id: 9,
    title: "回乡偶书",
    author: "贺知章",
    dynasty: "唐代",
    content: ["少小离家老大回", "乡音无改鬓毛衰", "儿童相见不相识", "笑问客从何处来"],
    paraphrase: "我年少时离开家乡，到老了才回来。家乡的口音没变，鬓角的头发已经稀疏了。家乡的小孩看见我不认识，笑眯眯地问我：客人您从哪里来？",
    difficulty: Difficulty.EASY
  },
  {
    id: 10,
    title: "游子吟",
    author: "孟郊",
    dynasty: "唐代",
    content: ["慈母手中线", "游子身上衣", "临行密密缝", "意恐迟迟归", "谁言寸草心", "报得三春晖"],
    paraphrase: "慈祥的母亲手里拿针线，为将要出门的儿子缝衣。临行时母亲缝得密密的，担心儿子迟迟不能回来。谁说小草那点微弱的心意，能报答得了像春阳一样的慈母恩情。",
    difficulty: Difficulty.EASY
  },
  {
    id: 11,
    title: "望庐山瀑布",
    author: "李白",
    dynasty: "唐代",
    content: ["日照香炉生紫烟", "遥看瀑布挂前川", "飞流直下三千尺", "疑是银河落九天"],
    paraphrase: "香炉峰在阳光的照射下生起紫色烟霞，从远处看去瀑布好似白色绢绸悬挂在山前。高崖上飞腾直落的瀑布好像有几千尺长，让人恍惚以为是银河从天上泻落到人间。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 12,
    title: "绝句",
    author: "杜甫",
    dynasty: "唐代",
    content: ["两个黄鹂鸣翠柳", "一行白鹭上青天", "窗含西岭千秋雪", "门泊东吴万里船"],
    paraphrase: "两只黄鹂在翠绿的柳树间鸣叫，一行白鹭直冲向蔚蓝的天空。从窗口望去，西岭长年不化的积雪尽收眼底，门前停泊着从遥远的东吴驶来的万里航船。",
    difficulty: Difficulty.EASY
  },
  {
    id: 13,
    title: "枫桥夜泊",
    author: "张继",
    dynasty: "唐代",
    content: ["月落乌啼霜满天", "江枫渔火对愁眠", "姑苏城外寒山寺", "夜半钟声到客船"],
    paraphrase: "月亮落下，乌鸦啼叫，寒霜布满了整片天空，江边的枫树伴着渔火，对衬着我这个忧虑难眠的人。姑苏城外的寒山古寺，半夜里悠扬的钟声传到了客船上。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 14,
    title: "凉州词",
    author: "王翰",
    dynasty: "唐代",
    content: ["葡萄美酒夜光杯", "欲饮琵琶马上催", "醉卧沙场君莫笑", "古来征战几人回"],
    paraphrase: "精美的酒杯里盛满了香醇的葡萄酒，正要开怀畅饮，琵琶声已经在马背上急促地响起，催促着出发。如果我们醉倒在战场上，请您不要见笑，自古以来奔赴疆场杀敌的人，能有几个可以活着回来呢？",
    difficulty: Difficulty.HARD
  },
  {
    id: 15,
    title: "送元二使安西",
    author: "王维",
    dynasty: "唐代",
    content: ["渭城朝雨浥轻尘", "客舍青青柳色新", "劝君更尽一杯酒", "西出阳关无故人"],
    paraphrase: "渭城早晨的一场雨湿润了路上的尘土，客栈外的柳树经过雨水冲洗，显得格外青翠。请你再干了这一杯酒吧，向西出了阳关，就再也没有老朋友了。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 16,
    title: "清明",
    author: "杜牧",
    dynasty: "唐代",
    content: ["清明时节雨纷纷", "路上行人欲断魂", "借问酒家何处有", "牧童遥指杏花村"],
    paraphrase: "清明时节，细雨纷纷。路上行走的人好像丢了魂魄，心里充满了愁苦。请问哪里有喝酒解愁的酒家？放牛的小孩指了指远处的杏花村。",
    difficulty: Difficulty.EASY
  },
  {
    id: 17,
    title: "山行",
    author: "杜牧",
    dynasty: "唐代",
    content: ["远上寒山石径斜", "白云生处有人家", "停车坐爱枫林晚", "霜叶红于二月花"],
    paraphrase: "顺着弯弯曲曲的小路上到寒山深处，在那白云升腾的地方隐约有几户人家。停下车子是因为喜爱这夕阳下的枫林美景，经霜的红叶比二月的繁花还要鲜艳。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 18,
    title: "乌衣巷",
    author: "刘禹锡",
    dynasty: "唐代",
    content: ["朱雀桥边野草花", "乌衣巷口夕阳斜", "旧时王谢堂前燕", "飞入寻常百姓家"],
    paraphrase: "朱雀桥边长满了野草和野花，乌衣巷口夕阳西下。从前在显赫的王导、谢安豪门堂前的燕子，现在已经飞入普通老百姓的家里了。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 19,
    title: "望天门山",
    author: "李白",
    dynasty: "唐代",
    content: ["天门中断楚江开", "碧水东流至此回", "两岸青山相对出", "孤帆一片日边来"],
    paraphrase: "天门山被长江撞开，碧绿的江水向东奔流，到这里又回旋汹涌。两岸的青山相对耸立，一叶扁舟在朝阳的映衬下，正从天边驶来。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 20,
    title: "暮江吟",
    author: "白居易",
    dynasty: "唐代",
    content: ["一道残阳铺水中", "半江瑟瑟半江红", "可怜九月初三夜", "露似真珠月似弓"],
    paraphrase: "残阳的光辉铺洒在江面上，江水一半呈现出碧绿色，一半反射出鲜红的光泽。最可爱的是那九月初三的夜晚，露珠像珍珠般晶莹，月亮弯得如同弓弦一样。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 21,
    title: "赋得古原草送别",
    author: "白居易",
    dynasty: "唐代",
    content: ["离离原上草", "一岁一枯荣", "野火烧不尽", "春风吹又生"],
    paraphrase: "原野上长满茂盛的野草，每年都会经历枯萎和繁茂的交替。野火无法将它们彻底烧毁，春风一吹，它们又会重新萌发。",
    difficulty: Difficulty.EASY
  },
  {
    id: 22,
    title: "乐游原",
    author: "李商隐",
    dynasty: "唐代",
    content: ["向晚意不适", "驱车登古原", "夕阳无限好", "只是近黄昏"],
    paraphrase: "临近傍晚时心情不佳，便驾车登上乐游古原。夕阳的晚景的确无限美好，可惜已经接近黄昏，美景即将消失。",
    difficulty: Difficulty.EASY
  },
  {
    id: 23,
    title: "赠汪伦",
    author: "李白",
    dynasty: "唐代",
    content: ["李白乘舟将欲行", "忽闻岸上踏歌声", "桃花潭水深千尺", "不及汪伦送我情"],
    paraphrase: "李白坐上小船正准备出发，忽然听到岸上传来踏歌送别的声音。即使桃花潭的水有千尺深，也比不上汪伦送我的这份深情厚谊。",
    difficulty: Difficulty.EASY
  },
  {
    id: 24,
    title: "黄鹤楼送孟浩然之广陵",
    author: "李白",
    dynasty: "唐代",
    content: ["故人西辞黄鹤楼", "烟花三月下扬州", "孤帆远影碧空尽", "唯见长江天际流"],
    paraphrase: "老朋友孟浩然向我告辞，离开了西边的黄鹤楼，在繁花似锦的三月去往扬州。那一叶扁舟的影子渐渐远去，消失在碧空的尽头，只看见长江之水滚滚向天际流去。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 25,
    title: "早发白帝城",
    author: "李白",
    dynasty: "唐代",
    content: ["朝辞白帝彩云间", "千里江陵一日还", "两岸猿声啼不住", "轻舟已过万重山"],
    paraphrase: "清晨告别在那彩云缭绕的白帝城，远在千里的江陵仅仅一天时间就能抵达。两岸猿猴的啼叫声还在耳边回荡，轻快的小船早已穿过重重的高山峻岭。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 26,
    title: "夜雨寄北",
    author: "李商隐",
    dynasty: "唐代",
    content: ["君问归期未有期", "巴山夜雨涨秋池", "何当共剪西窗烛", "却话巴山夜雨时"],
    paraphrase: "你问我回去的日期，我却还没法确定。此刻巴山的夜雨正下得紧，秋水涨满了池塘。什么时候我们才能在西窗下共剪烛花，那时再一起谈论今晚巴山的夜雨。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 27,
    title: "江南春",
    author: "杜牧",
    dynasty: "唐代",
    content: ["千里莺啼绿映红", "水村山郭酒旗风", "南朝四百八十寺", "多少楼台烟雨中"],
    paraphrase: "辽阔的江南到处莺歌燕舞，绿树红花交相辉映，临水的村庄、依山的城郭，酒旗在春风中飘扬。南朝遗留下来的四百八十座寺庙，如今有多少楼台笼罩在迷蒙的烟雨之中。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 28,
    title: "秋夕",
    author: "杜牧",
    dynasty: "唐代",
    content: ["银烛秋光冷画屏", "轻罗小扇扑流萤", "天阶夜色凉如水", "卧看牵牛织女星"],
    paraphrase: "秋夜里，精美的屏风笼罩在银白色烛光的清冷氛围中，我手拿丝织的小扇轻扑飞舞的流萤。石阶上的夜色凉快如水，我静静卧着凝望天上的牵牛星和织女星。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 29,
    title: "塞下曲",
    author: "卢纶",
    dynasty: "唐代",
    content: ["月黑雁飞高", "单于夜遁逃", "欲将轻骑逐", "大雪满弓刀"],
    paraphrase: "夜静月黑，大雁飞得很高，敌营的首领单于正趁着夜色仓皇逃命。正准备率领精锐的骑兵前去追击，忽然间纷纷扬扬的大雪已经落满了将士们的弓箭和佩刀。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 30,
    title: "春夜喜雨",
    author: "杜甫",
    dynasty: "唐代",
    content: ["好雨知时节", "当春乃发生", "随风潜入夜", "润物细无声"],
    paraphrase: "这场好雨好像懂得节候，当春天到来的时候就开始下起来。它伴着春风在深夜悄悄降临，滋润着万物，细微轻柔得没有一点声响。",
    difficulty: Difficulty.EASY
  },
  {
    id: 31,
    title: "题都城南庄",
    author: "崔护",
    dynasty: "唐代",
    content: ["去年今日此门中", "人面桃花相映红", "人面不知何处去", "桃花依旧笑春风"],
    paraphrase: "去年的今天，在这道门里，那位姑娘的脸庞在桃花的映衬下显得格外红润。如今姑娘已不知去向，唯有美丽的桃花依然如故，在春风中自由自在地开着。",
    difficulty: Difficulty.EASY
  },
  {
    id: 32,
    title: "锦瑟",
    author: "李商隐",
    dynasty: "唐代",
    content: ["锦瑟无端五十弦", "一弦一柱思华年", "庄生晓梦迷蝴蝶", "望帝春心托杜鹃", "沧海月明珠有泪", "蓝田日暖玉生烟", "此情可待成追忆", "只是当时已惘然"],
    paraphrase: "锦瑟啊，你为何无缘无故地有五十根弦呢？每一根弦、每一根柱都勾起我对往昔岁月的追思。正如庄周在早晨的梦中迷恋蝴蝶，望帝把满腔幽怨托付给杜鹃。沧海明月之下，珍珠好似泪滴；蓝田暖日照耀，玉石生起如烟。这些情感本该成为久远的追忆，只是在当时就已经让人感到惘然若失。",
    difficulty: Difficulty.HARD
  },
  {
    id: 33,
    title: "将进酒",
    author: "李白",
    dynasty: "唐代",
    content: ["君不见黄河之水天上来", "奔流到海不复回", "君不见高堂明镜悲白发", "朝如青丝暮成雪", "人生得意须尽欢", "莫使金樽空对月", "天生我材必有用", "千金散尽还复来"],
    paraphrase: "你看那黄河之水从天上滚滚流下，奔向大海再也没有回来。你看那父母对着镜子为满头白发悲哀，早晨还是一头青丝，到傍晚就变成了雪白。人生得意的时候就要尽情地欢乐，不要让金杯空对着明月。上天生下我这个材料必然有用处，即使千金散去也还会重新回来。",
    difficulty: Difficulty.HARD
  },
  {
    id: 34,
    title: "登幽州台歌",
    author: "陈子昂",
    dynasty: "唐代",
    content: ["前不见古人", "后不见来者", "念天地之悠悠", "独怆然而涕下"],
    paraphrase: "往前看不见古代招贤纳士的圣明君主，往后看不见后世能识英才的来者。想到这天地之大，时间之悠远，我独自感到无比悲哀，禁不住热泪横流。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 35,
    title: "凉州词",
    author: "王之涣",
    dynasty: "唐代",
    content: ["黄河远上白云间", "一片孤城万仞山", "羌笛何须怨杨柳", "春风不度玉门关"],
    paraphrase: "黄河远远望去好像直上云霄，在万丈高山中有一座偏远的孤城。羌笛何必吹奏哀怨的《折杨柳》曲呢？春风本来就吹不到这荒凉的玉门关外。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 36,
    title: "春望",
    author: "杜甫",
    dynasty: "唐代",
    content: ["国破山河在", "城春草木深", "感时花溅泪", "恨别鸟惊心"],
    paraphrase: "国家沦陷，只有山河依旧。长安城春意黯然，到处长满了荒草。感伤于时局，连看到盛开的花朵都想流泪；怨恨于离散，听到鸟儿的鸣叫声也感到心惊胆战。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 37,
    title: "登高",
    author: "杜甫",
    dynasty: "唐代",
    content: ["风急天高猿啸哀", "渚清沙白鸟飞回", "无边落木萧萧下", "不尽长江滚滚来"],
    paraphrase: "风声急促，天宇高远，猿猴的哀鸣声不断；水清沙白，鸟儿在空中盘旋。无边无际的树叶萧萧落下，浩浩荡荡的长江滚滚奔流而来。",
    difficulty: Difficulty.HARD
  },
  {
    id: 38,
    title: "望岳",
    author: "杜甫",
    dynasty: "唐代",
    content: ["岱宗夫如何", "齐鲁青未了", "造化钟神秀", "阴阳割昏晓", "荡胸生曾云", "决眦入归鸟", "会当凌绝顶", "一览众山小"],
    paraphrase: "泰山到底是什么样子的呢？齐鲁大地上那青翠的山色望不到尽头。大自然把所有的灵秀都集中在这里，山南山北将晨昏隔断开来。层层云气涌过心胸，极力睁大眼睛追逐着归林的鸟影。一定要登上泰山的最高峰，那时俯瞰四周，其他的山都会显得矮小。",
    difficulty: Difficulty.HARD
  },
  {
    id: 39,
    title: "逢入京使",
    author: "岑参",
    dynasty: "唐代",
    content: ["故园东望路漫漫", "双袖龙钟泪不干", "马上相逢无纸笔", "凭君传语报平安"],
    paraphrase: "向东望去，故乡的路途漫漫长远。想到远方的亲人，泪水沾湿了衣袖，久久不干。在马背上匆匆相逢，没有纸笔可以写信，只能请你捎个口信，替我报个平安。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 40,
    title: "出塞",
    author: "王昌龄",
    dynasty: "唐代",
    content: ["秦时明月汉时关", "万里长征人未还", "但使龙城飞将在", "不教胡马度阴山"],
    paraphrase: "依旧是秦汉时期的明月和关隘，远征万里的将士们至今还没有回来。如果龙城的飞将军李广还健在，绝不会让敌人的战马跨过阴山。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 41,
    title: "次北固山下",
    author: "王湾",
    dynasty: "唐代",
    content: ["客路青山外", "行舟绿水前", "潮平两岸阔", "风正一帆悬", "海日生残夜", "江春入旧年", "乡书何处达", "归雁洛阳边"],
    paraphrase: "旅途在青山之外，小船行驶在碧绿的江面上。潮水上涨，两岸显得更加宽阔，风向顺正，桅杆上的帆高高挂起。海上的初日从残留的夜色中升起，江边的春意在旧年未尽时就已闯入。家书什么时候才能送达呢？希望那北归的大雁能经过我洛阳的家乡。",
    difficulty: Difficulty.HARD
  },
  {
    id: 42,
    title: "芙蓉楼送辛渐",
    author: "王昌龄",
    dynasty: "唐代",
    content: ["寒雨连江夜入吴", "平明送客楚山孤", "洛阳亲友如相问", "一片冰心在玉壶"],
    paraphrase: "冷雨连夜洒遍了长江，我进入吴地。天亮时送走友人，只剩下楚山孤独地耸立。如果洛阳的亲友们问起我，就请告诉他们，我的心依然像玉壶里的冰块一样，纯洁透明，坚贞不渝。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 43,
    title: "黄鹤楼",
    author: "崔颢",
    dynasty: "唐代",
    content: ["昔人已乘黄鹤去", "此地空余黄鹤楼", "黄鹤一去不复返", "白云千载空悠悠"],
    paraphrase: "昔日的仙人已经乘着黄鹤飞去，这里只留下一座空荡荡的黄鹤楼。黄鹤飞走以后再也没有回来，千百年来只有白云在空中悠闲地飘荡。",
    difficulty: Difficulty.HARD
  },
  {
    id: 44,
    title: "蜀相",
    author: "杜甫",
    dynasty: "唐代",
    content: ["丞相祠堂何处寻", "锦官城外柏森森", "映阶碧草自春色", "隔叶黄鹂空好音", "三顾频烦天下计", "两朝开济老臣心", "出师未捷身先死", "长使英雄泪满襟"],
    paraphrase: "要去哪里寻找诸葛丞相的祠堂呢？那就是锦官城外古柏茂密的地方。映照在台阶上的碧草自顾自地展现春色，隐藏在绿叶中的黄鹂徒自发出悦耳的声音。刘备三顾茅庐频繁地商讨天下大计，诸葛亮辅佐两代君主贡献了一位老臣的一片赤心。可惜出师未捷就先已去世，这桩憾事常使历代英雄感慨万千，泪流襟袖。",
    difficulty: Difficulty.HARD
  },
  {
    id: 45,
    title: "从军行",
    author: "王昌龄",
    dynasty: "唐代",
    content: ["青海长云暗雪山", "孤城遥望玉门关", "黄沙百战穿金甲", "不破楼兰终不还"],
    paraphrase: "青海上空大片云彩遮住了雪山，从孤城向远处望去就是玉门关。在漫天黄沙中经历百战，即使磨穿了金甲，如果不攻破楼兰，我们也绝不返回家园。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 46,
    title: "无题",
    author: "李商隐",
    dynasty: "唐代",
    content: ["相见时难别亦难", "东风无力百花残", "春蚕到死丝方尽", "蜡炬成灰泪始干"],
    paraphrase: "彼此相见时很难，分别时更加痛苦。东风已经没有了力量，百花在凋零，暮春景象让人伤感。春蚕直到死时才会把丝吐尽，红蜡烛要等到烧成灰烬时，泪滴才会流干。",
    difficulty: Difficulty.HARD
  },
  {
    id: 47,
    title: "闻官军收河南河北",
    author: "杜甫",
    dynasty: "唐代",
    content: ["剑外忽传收蓟北", "初闻涕泪满衣裳", "却看妻子愁何在", "漫卷诗书喜欲狂"],
    paraphrase: "在剑外忽然听到官军收复了蓟北的消息，刚刚听到时，激动的泪水就洒满了衣裳。回头看看妻子儿女，忧愁早已烟消云散；我随手胡乱卷起诗书，快活得简直要发狂了。",
    difficulty: Difficulty.HARD
  },
  {
    id: 48,
    title: "宣州谢朓楼饯别校书叔云",
    author: "李白",
    dynasty: "唐代",
    content: ["弃我去者昨日之日不可留", "乱我心者今日之日多烦忧", "抽刀断水水更流", "举杯消愁愁更愁"],
    paraphrase: "抛弃我而去的昨天，已经无法挽留；扰乱我心情的今天，有太多的烦恼和忧愁。拔出刀子想要斩断流水，水反而流得更急；举起酒杯想要借酒消愁，忧愁反而更加深重。",
    difficulty: Difficulty.HARD
  },
  {
    id: 49,
    title: "行路难",
    author: "李白",
    dynasty: "唐代",
    content: ["金樽清酒斗十千", "玉盘珍羞直万钱", "停杯投箸不能食", "拔剑四顾心茫然"],
    paraphrase: "金杯里的美酒价值万钱，玉盘里的佳肴也值万金。可是我停下杯子扔掉筷子，无法下咽；拔出宝剑向四周环顾，心中充满了茫然。",
    difficulty: Difficulty.HARD
  },
  {
    id: 50,
    title: "白雪歌送武判官归京",
    author: "岑参",
    dynasty: "唐代",
    content: ["北风卷地白草折", "胡天八月即飞雪", "忽如一夜春风来", "千树万树梨花开"],
    paraphrase: "凛冽的北风席卷大地，枯萎的白草被吹折。塞外的八月就开始大雪纷纷。忽然间漫天大雪飘落，就像是一夜春风吹来，引得千树万树的梨花竞相开放。",
    difficulty: Difficulty.HARD
  },
  {
    id: 51,
    title: "独坐敬亭山",
    author: "李白",
    dynasty: "唐代",
    content: ["众鸟高飞尽", "孤云独去闲", "相看两不厌", "只有敬亭山"],
    paraphrase: "成群的鸟儿都已经高飞远去，天边的一朵孤云也悠闲地渐行渐远。在这个世界上，能够互相端详而永不感到厌烦的，看来只有眼前的敬亭山了。",
    difficulty: Difficulty.EASY
  },
  {
    id: 52,
    title: "子夜吴歌·秋歌",
    author: "李白",
    dynasty: "唐代",
    content: ["长安一片月", "万户捣衣声", "秋风吹不尽", "总是玉关情"],
    paraphrase: "长安城笼罩在一片月光之下，成千上万户人家都传来了捣衣的声音。凛冽的秋风吹拂不尽，这声音里满含着对远在玉门关将士的深情牵挂。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 53,
    title: "望月怀远",
    author: "张九龄",
    dynasty: "唐代",
    content: ["海上生明月", "天涯共此时", "情人怨遥夜", "竟夕起相思"],
    paraphrase: "茫茫大海上升起一轮明月，远在天涯海角的你我此时此刻都在共同守望着它。多情的人怨恨这漫漫长夜，整夜起身坐卧，心中充满了对你的思念。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 54,
    title: "送别",
    author: "王维",
    dynasty: "唐代",
    content: ["下马饮君酒", "问君何所之", "君言不得意", "归卧南山陲"],
    paraphrase: "请你下马喝杯酒吧，请问你要去哪里？你说自己在京城不如意，打算回到终南山的边陲隐居去。",
    difficulty: Difficulty.EASY
  },
  {
    id: 55,
    title: "杂诗三首·其二",
    author: "王维",
    dynasty: "唐代",
    content: ["君自故乡来", "应知故乡事", "来日绮窗前", "寒梅著花未"],
    paraphrase: "您是从我的故乡来的，一定知道家乡的事情。请问您出发的那天，我家雕花窗前的那棵腊梅，开花了没有？",
    difficulty: Difficulty.EASY
  },
  {
    id: 56,
    title: "相思",
    author: "王维",
    dynasty: "唐代",
    content: ["红豆生南国", "春来发几枝", "愿君多采撷", "此物最相思"],
    paraphrase: "红豆生长在南方，春天到了，又长出了几家新枝？希望你能多多采摘一些，因为它最能寄托人们互相思念的情感。",
    difficulty: Difficulty.EASY
  },
  {
    id: 57,
    title: "九月九日忆山东兄弟",
    author: "王维",
    dynasty: "唐代",
    content: ["独在异乡为异客", "每逢佳节倍思亲", "遥知兄弟登高处", "遍插茱萸少一人"],
    paraphrase: "独自一个人身在他乡作为异地的客人，每当遇到过节的时候就加倍地思念亲人。遥想家乡的兄弟们现在一定正在登高望远，每个人身上都插着茱萸，只可惜少了我一个人。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 58,
    title: "少年行四首·其二",
    author: "王维",
    dynasty: "唐代",
    content: ["新丰美酒斗十千", "咸阳游侠多少年", "相逢意气为君饮", "系马高楼垂柳边"],
    paraphrase: "新丰的美酒价值万钱，咸阳城里到处都是意气风发的少年游侠。彼此相逢意气相投，一定要为你痛饮一番，把马儿拴在高楼边的垂柳树下。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 59,
    title: "渭川田家",
    author: "王维",
    dynasty: "唐代",
    content: ["斜阳照墟落", "穷巷牛羊归", "野老念牧童", "倚杖候荆扉"],
    paraphrase: "夕阳斜照着村落，牛羊正穿过深巷回到圈中。村里的老爷爷惦念着放牛的孩子，拄着拐杖在柴门前等候着。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 60,
    title: "宿建德江",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["移舟泊烟渚", "日暮客愁新", "野旷天低树", "江清月近人"],
    paraphrase: "把船划向江中烟雾笼罩的小洲停泊，日落黄昏，旅人的愁绪又在心中升起。旷野无边，远方的天际显得比近处的树木还要低。江水清澈，映在水中的月影仿佛离人非常亲近。",
    difficulty: Difficulty.EASY
  },
  {
    id: 61,
    title: "春晓",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["春眠不觉晓", "处处闻啼鸟", "夜来风雨声", "花落知多少"],
    paraphrase: "春天睡觉不知不觉天已经亮了，到处都能听到鸟儿清脆的鸣叫声。想起昨天夜里的风雨声，不知道有多少花朵被吹落了呢。",
    difficulty: Difficulty.EASY
  },
  {
    id: 62,
    title: "过故人庄",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["故人具鸡黍", "邀我至田家", "绿树村边合", "青山郭外斜", "开轩面场圃", "把酒话桑麻", "待到重阳日", "还来就菊花"],
    paraphrase: "老朋友准备了丰盛的饭菜，邀请我到他的农家作客。翠绿的树木环绕着村落，青翠的山峦在城郭外倾斜。打开窗户面对着打谷场和菜园，举起酒杯谈论着庄稼的收成。等到重阳节那天，我还要再来和你一起欣赏菊花。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 63,
    title: "夏日南亭怀辛大",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["山光忽西落", "池月渐东上", "散发乘夕凉", "开轩卧闲敞", "荷风送香气", "竹露滴清响"],
    paraphrase: "山上的阳光忽然落向西边，池塘里的月亮渐渐从东方升起。披散着头发享受着傍晚的清凉，打开窗子躺在宽敞闲适的亭子里。微风吹过荷花送来阵阵香气，竹叶上的露珠滴落发出清脆的响声。",
    difficulty: Difficulty.HARD
  },
  {
    id: 64,
    title: "早寒江上有怀",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["木落雁南度", "北风江上寒", "我家襄水曲", "遥隔楚云端", "乡泪客中尽", "归帆天际看"],
    paraphrase: "树叶凋落，大雁向南方飞去，北风吹在江面上感到丝丝寒意。我的家就在襄水转弯的地方，此刻遥远地隔在楚地的云端。在他乡做客眼泪已经流尽，只能望着天边的归帆寄托思乡之情。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 65,
    title: "寻隐者不遇",
    author: "贾岛",
    dynasty: "唐代",
    content: ["松下问童子", "言师采药去", "只在此山中", "云深不知处"],
    paraphrase: "在松树下询问隐者的童子，他说师父已经去山里采药了。师父就在这山里，可是云雾缭绕，不知道到底在哪个地方。",
    difficulty: Difficulty.EASY
  },
  {
    id: 66,
    title: "竹里馆",
    author: "王维",
    dynasty: "唐代",
    content: ["独坐幽篁里", "弹琴复长啸", "深林人不知", "明月来相照"],
    paraphrase: "一个人静静地坐在幽深的竹林里，一边弹着琴，一边大声啸呼。在这深林中没有人知晓我的存在，只有那明亮的月光过来映照着我。",
    difficulty: Difficulty.EASY
  },
  {
    id: 67,
    title: "鹿柴",
    author: "王维",
    dynasty: "唐代",
    content: ["空山不见人", "但闻人语响", "返景入深林", "复照青苔上"],
    paraphrase: "在寂静的山中看不见人影，只能隐约听到人们说话的声音。夕阳的余晖射入了深林之中，又重新照在绿油油的青苔上面。",
    difficulty: Difficulty.EASY
  },
  {
    id: 68,
    title: "送别",
    author: "王维",
    dynasty: "唐代",
    content: ["山中相送罢", "日暮掩柴扉", "春草明年绿", "王孙归不归"],
    paraphrase: "在山中送走了朋友，日落黄昏，我关上了自家的柴门。明年春天野草还会变绿，不知道我的朋友你到那时还会不会回来？",
    difficulty: Difficulty.EASY
  },
  {
    id: 69,
    title: "终南别业",
    author: "王维",
    dynasty: "唐代",
    content: ["中岁颇好道", "晚家南山陲", "兴来每独往", "胜事空自知", "行到水穷处", "坐看云起时"],
    paraphrase: "中年以后我非常喜爱佛道，晚年便在终南山的边陲安了家。兴致来时常常独自出去漫步，美好的情趣只有我自己知晓。走到水的尽头处，索性坐下来看那白云悠闲地升起。",
    difficulty: Difficulty.HARD
  },
  {
    id: 70,
    title: "桃源行",
    author: "王维",
    dynasty: "唐代",
    content: ["渔舟逐水爱山春", "两岸桃花夹古津", "坐看红树不知远", "行尽青溪不见人"],
    paraphrase: "渔船顺着流水寻找山间的春色，两岸盛开的桃花夹着古老的渡口。只顾着看那红艳艳的桃林，忘记了路途的遥远。走到青清的小溪尽头，却看不见一个人影。",
    difficulty: Difficulty.HARD
  },
  {
    id: 71,
    title: "听蜀僧濬弹琴",
    author: "李白",
    dynasty: "唐代",
    content: ["蜀僧抱绿绮", "西下峨眉峰", "为我一挥手", "如听万壑松"],
    paraphrase: "四川的僧人怀抱着名贵的绿绮琴，从西边的峨眉山走下来。他为我挥手弹奏，琴声清脆宏亮，就像听到了万壑松涛的声音。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 72,
    title: "夜泊牛渚怀古",
    author: "李白",
    dynasty: "唐代",
    content: ["牛渚西江夜", "青天无片云", "登舟望秋月", "空忆谢将军"],
    paraphrase: "夜晚在牛渚西江停泊，晴朗的天空中没有一片云彩。登上船头仰望秋天的明月，徒自在这里追忆着当年的谢尚将军。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 73,
    title: "月下独酌四首·其一",
    author: "李白",
    dynasty: "唐代",
    content: ["花间一壶酒", "独酌无相亲", "举杯邀明月", "对影成三人"],
    paraphrase: "在花丛中摆放了一壶美酒，独自一个人饮酒，没有亲近的朋友。于是我举起酒杯邀请天上的明月，月亮、影子和我，凑成了三个人。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 74,
    title: "春思",
    author: "李白",
    dynasty: "唐代",
    content: ["燕草如碧丝", "秦桑低绿枝", "当君怀归日", "是妾断肠时"],
    paraphrase: "燕地的草才刚刚像碧丝一样嫩绿，秦地的桑树已经沉甸甸地低下了绿色的枝条。当你怀念家乡想要回来的时候，正是我思念你到肝肠欲断的时候。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 75,
    title: "关山月",
    author: "李白",
    dynasty: "唐代",
    content: ["明月出天山", "苍茫云海间", "长风几万里", "吹度玉门关"],
    paraphrase: "明亮的月儿从天山上升起，出没在苍茫的云海之间。长风浩荡了几万里，吹过了那偏远的玉门关。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 76,
    title: "玉阶怨",
    author: "李白",
    dynasty: "唐代",
    content: ["玉阶生白露", "夜久侵罗袜", "却下水晶帘", "玲珑望秋月"],
    paraphrase: "玉石台阶上生起了白色的露珠，在这深深的夜里，露水打湿了罗袜。回到室内放下水晶编织的窗帘，隔着帘子凝望着秋天的明月。",
    difficulty: Difficulty.EASY
  },
  {
    id: 77,
    title: "蜀道难",
    author: "李白",
    dynasty: "唐代",
    content: ["噫吁嚱危乎高哉", "蜀道之难难于上青天", "蚕丛及鱼凫", "开国何茫然"],
    paraphrase: "啊！多么高险多么雄伟啊！蜀道之难，难于上青天。蚕丛和鱼凫，蜀国祖先立国的时候，是多么的渺茫啊。",
    difficulty: Difficulty.HARD
  },
  {
    id: 78,
    title: "登金陵凤凰台",
    author: "李白",
    dynasty: "唐代",
    content: ["凤凰台上凤凰游", "凤去台空江自流", "吴宫花草埋幽径", "晋代衣冠成古丘"],
    paraphrase: "凤凰台上曾经有凤凰在游玩，现在凤凰飞走了，台也空了，只有江水自顾自地流着。东吴宫廷里的花草已经埋没在荒僻的小路里，晋代的公卿权贵也早已变成了荒凉的山丘。",
    difficulty: Difficulty.HARD
  },
  {
    id: 79,
    title: "玉阶怨",
    author: "李白",
    dynasty: "唐代",
    content: ["玉阶生白露", "夜久侵罗袜", "却下水晶帘", "玲珑望秋月"],
    paraphrase: "玉石台阶上生起了晶莹的露珠，夜深时打湿了罗袜。回到房中放下水晶帘子，隔着它依然凝望着秋天的明月。",
    difficulty: Difficulty.EASY
  },
  {
    id: 80,
    title: "峨眉山月歌",
    author: "李白",
    dynasty: "唐代",
    content: ["峨眉山月半轮秋", "影入平羌江水流", "夜发清溪向三峡", "思君不见下渝州"],
    paraphrase: "秋天峨眉山上半轮明月高挂，月影映在平羌江水中随波流去。深夜从清溪出发驶向三峡，思念着你却见不到，只能一直来到渝州。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 81,
    title: "长相思二首·其一",
    author: "李白",
    dynasty: "唐代",
    content: ["长相思在长安", "络纬秋啼金井栏", "微霜凄凄簟色寒", "孤灯不明思欲绝"],
    paraphrase: "长长的相思都在那长安城。秋夜里纺织娘在井栏边啼叫。微薄的寒霜让席子感到阵阵凉意，昏暗的孤灯下，我的思念之情简直要让人肝肠寸断。",
    difficulty: Difficulty.HARD
  },
  {
    id: 82,
    title: "梦李白二首·其一",
    author: "杜甫",
    dynasty: "唐代",
    content: ["死别已吞声", "生别常恻恻", "江南瘴疠地", "逐客无消息"],
    paraphrase: "死别的哀痛只能吞声哭泣。生别的惆怅却常使我忧心忡忡。江南是个多病瘴的地方，你被放逐远方后已经很久没有消息了。",
    difficulty: Difficulty.HARD
  },
  {
    id: 83,
    title: "旅夜书怀",
    author: "杜甫",
    dynasty: "唐代",
    content: ["细草微风岸", "危樯独夜舟", "星垂平野阔", "月涌大江流"],
    paraphrase: "微风吹拂着江岸上的细草。夜晚孤独的船只高高地竖立着桅杆。星辰垂落在无限空旷的原野上，明月在滚滚奔流的长江中涌现。",
    difficulty: Difficulty.HARD
  },
  {
    id: 84,
    title: "登岳阳楼",
    author: "杜甫",
    dynasty: "唐代",
    content: ["昔闻洞庭水", "今上岳阳楼", "吴楚东南坼", "乾坤日夜浮"],
    paraphrase: "过去就听闻洞庭湖的美景。今天终于登上了岳阳楼。吴、楚两国在这里被大湖隔开。天地的气象仿佛全在这江水中日夜浮沉。",
    difficulty: Difficulty.HARD
  },
  {
    id: 85,
    title: "江南逢李龟年",
    author: "杜甫",
    dynasty: "唐代",
    content: ["岐王宅里寻常见", "崔九堂前几度闻", "正是江南好风景", "落花时节又逢君"],
    paraphrase: "当年在岐王家里经常能见到你。在崔九的堂前也多次听到你高歌。现在正是江南风景优美的季节。却偏偏在这落花时节再次遇到了你。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 86,
    title: "赠别二首·其一",
    author: "杜牧",
    dynasty: "唐代",
    content: ["娉娉袅袅十三余", "豆蔻梢头二月初", "春风十里扬州路", "卷上珠帘总不如"],
    paraphrase: "姿态美好、身姿轻盈的你才十三岁左右，就像二月初豆蔻花梢头那含苞待放的花朵。即使扬州城十里长街上春风得意。卷起珠帘来看，那些歌舞女子总还是比不上你。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 87,
    title: "寄扬州韩绰判官",
    author: "杜牧",
    dynasty: "唐代",
    content: ["青山隐隐水迢迢", "秋尽江南草未凋", "二十四桥明月夜", "玉人何处教吹箫"],
    paraphrase: "远处的青山隐约可见，江水迢迢流向远方。虽然秋天已尽，但江南的草儿还没有凋零。在那二十四桥明月照耀的夜晚。你这位玉人此时正在什么地方教人吹箫呢？",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 88,
    title: "遣怀",
    author: "杜牧",
    dynasty: "唐代",
    content: ["落魄江湖载酒行", "楚腰纤细掌中轻", "十年一觉扬州梦", "赢得青楼薄幸名"],
    paraphrase: "落魄地流落江湖，带着美酒四处游逛。沉溺于江南女子的温柔乡。十年来在扬州的经历就像一场大梦。到头来只落得个青楼里的浪荡薄情名声。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 89,
    title: "秋夕",
    author: "杜牧",
    dynasty: "唐代",
    content: ["银烛秋光冷画屏", "轻罗小扇扑流萤", "天阶夜色凉如水", "卧看牵牛织女星"],
    paraphrase: "精美的屏风笼罩在银白色烛光的清冷氛围中，我手拿丝织的小扇轻扑飞舞的流萤。石阶上的夜色凉快如水，我静静卧着凝望天上的牵牛星和织女星。",
    difficulty: Difficulty.EASY
  },
  {
    id: 90,
    title: "无题·相见时难别亦难",
    author: "李商隐",
    dynasty: "唐代",
    content: ["相见时难别亦难", "东风无力百花残", "春蚕到死丝方尽", "蜡炬成灰泪始干"],
    paraphrase: "彼此相见时很难，分别时更加痛苦。春天即将结束，东风已经没有了力量，百花在凋零。春蚕直到死时才会把丝吐尽，红蜡烛要等到烧成灰烬时，泪滴才会不再流下。",
    difficulty: Difficulty.HARD
  },
  {
    id: 91,
    title: "无题·昨夜星辰昨夜风",
    author: "李商隐",
    dynasty: "唐代",
    content: ["昨夜星辰昨夜风", "画楼西畔桂堂东", "身无彩凤双飞翼", "心有灵犀一点通"],
    paraphrase: "昨夜星光灿烂，凉风习习。在那画楼的西边、桂堂的东面。身上虽然没有彩凤那样可以双飞的翅膀。但我们的心意却像传说中的灵犀角一样，能够互相感应。",
    difficulty: Difficulty.HARD
  },
  {
    id: 92,
    title: "乐游原",
    author: "李商隐",
    dynasty: "唐代",
    content: ["向晚意不适", "驱车登古原", "夕阳无限好", "只是近黄昏"],
    paraphrase: "临近傍晚时心情不佳。便驾车登上乐游古原。夕阳的晚景的确无限美好。可惜已经接近黄昏了。",
    difficulty: Difficulty.EASY
  },
  {
    id: 93,
    title: "隋宫",
    author: "李商隐",
    dynasty: "唐代",
    content: ["紫泉宫殿锁烟霞", "欲取芜城作帝家", "玉玺不缘归日角", "锦帆应是到天涯"],
    paraphrase: "长安的宫殿被暮色烟霞紧锁。隋炀帝一门心思想要把芜城扬州建成帝王之家。要不是皇位继承人最终归了真龙天子李渊。恐怕隋炀帝的这艘锦帆龙船还要一直划向天涯海角。",
    difficulty: Difficulty.HARD
  },
  {
    id: 94,
    title: "贾生",
    author: "李商隐",
    dynasty: "唐代",
    content: ["宣室求贤访逐臣", "贾生才调更无伦", "可怜夜半虚前席", "不问苍生问鬼神"],
    paraphrase: "汉文帝在宣室思渴贤才，访问被流放的大臣。贾谊的才调天下无双。可惜文帝深夜里虚心侧耳倾听。却偏偏不问国家大事百姓生计，反而问起了鬼神之事。",
    difficulty: Difficulty.HARD
  },
  {
    id: 95,
    title: "过华清宫绝句三首·其一",
    author: "杜牧",
    dynasty: "唐代",
    content: ["长安回望绣成堆", "山顶千门次第开", "一骑红尘妃子笑", "无人知是荔枝来"],
    paraphrase: "从长安城回望，满山就像色彩斑斓的锦绣。华清宫的山顶上，重重宫门依次打开。一匹快马扬起尘土飞驰而来，杨贵妃露出了开心的笑容。却没有知道，这竟然是专门为她送荔枝来的快马。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 96,
    title: "咸阳城东楼",
    author: "许浑",
    dynasty: "唐代",
    content: ["一上高楼万里愁", "蒹葭杨柳似汀洲", "溪云初起日沉阁", "山雨欲来风满楼"],
    paraphrase: "一旦登上了这咸阳城东楼，万千愁绪便涌上心头。江边的芦苇和杨柳就像那小洲上的景色一样凄迷。溪云刚刚升起，夕阳沉没在了楼阁之后。山雨将要到来，大风已经吹满了整座城楼。",
    difficulty: Difficulty.HARD
  },
  {
    id: 97,
    title: "望海潮",
    author: "柳永 (注: 宋代名篇)",
    dynasty: "宋代",
    content: ["东南形胜", "三吴都会", "钱塘自古繁华", "烟柳画桥", "风帘翠幕", "参差十万人家"],
    paraphrase: "(注: 此处为示例，实际以唐诗为主。)",
    difficulty: Difficulty.HARD
  },
  {
    id: 98,
    title: "秋登宣城谢朓北楼",
    author: "李白",
    dynasty: "唐代",
    content: ["江城如画里", "山晚望晴空", "两水夹明镜", "双桥落彩虹"],
    paraphrase: "江边的城郭就像在画中一样。傍晚在山上凝望着晴朗的天空。两条清澈的江水就像明镜一样将城池夹在中间。两座桥梁跨在江上，就像那横跨天际的彩虹。",
    difficulty: Difficulty.HARD
  },
  {
    id: 99,
    title: "雁门太守行",
    author: "李贺",
    dynasty: "唐代",
    content: ["黑云压城城欲摧", "甲光向日金鳞开", "角声满天秋色里", "塞上燕脂凝夜紫"],
    paraphrase: "黑沉沉的云彩笼罩着城头，城池仿佛快要坍塌。夕阳映照在将士们的铠甲上，闪烁着金色的光泽。号角声充满了这肃杀的秋色。战后的血迹在塞外的夜色中凝成了紫红色。",
    difficulty: Difficulty.HARD
  },
  {
    id: 100,
    title: "江宁登名府",
    author: "李白",
    dynasty: "唐代",
    content: ["名府登高楼", "清风入我袖", "江流天地外", "山色有无中"],
    paraphrase: "登上名府的高楼，清凉的山风吹入了衣袖。大江之水仿佛流向了天际之外。远处的山色在迷蒙中若隐若现。",
    difficulty: Difficulty.HARD
  },
  {
    id: 101,
    title: "登高",
    author: "杜甫",
    dynasty: "唐代",
    content: ["风急天高猿啸哀", "渚清沙白鸟飞回", "无边落木萧萧下", "不尽长江滚滚来"],
    paraphrase: "风声急促，天宇高远，猿猴的哀鸣在回荡。水清沙白，鸟儿在空中盘旋。无边无际的树叶随风零落，浩浩荡荡的长江水奔流不息。",
    difficulty: Difficulty.HARD
  },
  {
    id: 102,
    title: "旅夜书怀",
    author: "杜甫",
    dynasty: "唐代",
    content: ["细草微风岸", "危樯独夜舟", "星垂平野阔", "月涌大江流"],
    paraphrase: "微风吹拂着江岸上的细草。夜晚孤独的船只高高地竖立着桅杆。星辰垂落在无限空旷的原野上，明月在滚滚奔流的长江中涌现。",
    difficulty: Difficulty.HARD
  },
  {
    id: 103,
    title: "咏怀古迹五首·其三",
    author: "杜甫",
    dynasty: "唐代",
    content: ["群山万壑赴荆门", "生长明妃尚有村", "一去紫台连朔漠", "独留青冢向黄昏"],
    paraphrase: "千山万壑向着荆门奔涌而去，这里依然保留着传说中昭君生长的村庄。一旦离开了华丽的宫廷，便走向了遥远的荒漠，只留下这一座青草覆盖的坟冢，在夕阳下陪伴着黄昏。",
    difficulty: Difficulty.HARD
  },
  {
    id: 104,
    title: "阁夜",
    author: "杜甫",
    dynasty: "唐代",
    content: ["岁暮阴阳催短景", "天涯霜雪霁寒宵", "五更鼓角声悲壮", "三峡星河影动摇"],
    paraphrase: "岁末的天时催促着短促的时光，天边的霜雪在寒冷的夜晚初晴。五更时分号角声悲壮，映在三峡水中的星河倒影在摇晃不定。",
    difficulty: Difficulty.HARD
  },
  {
    id: 105,
    title: "登岳阳楼",
    author: "杜甫",
    dynasty: "唐代",
    content: ["昔闻洞庭水", "今上岳阳楼", "吴楚东南坼", "乾坤日夜浮"],
    paraphrase: "过去就听闻洞庭湖的美景。今天终于登上了岳阳楼。吴、楚两国在这里被大湖隔开。天地的气象仿佛全在这江水中日夜浮沉。",
    difficulty: Difficulty.HARD
  },
  {
    id: 106,
    title: "望岳",
    author: "杜甫",
    dynasty: "唐代",
    content: ["岱宗夫如何", "齐鲁青未了", "造化钟神秀", "阴阳割昏晓"],
    paraphrase: "泰山到底是什么样子的呢？齐鲁大地上那青翠的山色望不到尽头。大自然把所有的灵秀都集中在这里，山南山北将晨昏隔断开来。",
    difficulty: Difficulty.HARD
  },
  {
    id: 107,
    title: "题大庚岭北驿",
    author: "宋之问",
    dynasty: "唐代",
    content: ["阳月南飞雁", "传闻至此回", "我行殊未已", "何日复归来"],
    paraphrase: "十月里大雁向南方飞去，听说到了这里就会返回。而我的旅途还没有结束，到底哪一天才能重新回来呢？",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 108,
    title: "渡荆门送别",
    author: "李白",
    dynasty: "唐代",
    content: ["渡远荆门外", "来从楚国游", "山随平野尽", "江入大荒流"],
    paraphrase: "乘船来到遥远的荆门关外，来到这楚国故地游览。高山随着平旷的原野渐渐消失，大江流向那辽阔无边的荒野。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 109,
    title: "送友",
    author: "李白",
    dynasty: "唐代",
    content: ["青山横北郭", "白水绕东城", "此地一为别", "孤蓬万里征"],
    paraphrase: "青山横亘在城北。白色的江水绕过城东。在这里我们就要离别了。你将像那随风飘荡的孤蓬，从此开启万里征程。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 110,
    title: "夜下征虏亭",
    author: "李白",
    dynasty: "唐代",
    content: ["船下广陵去", "月明征虏亭", "山花如绣颊", "江火似流萤"],
    paraphrase: "小船正驶向广陵。月光洒在征虏亭上。山上的鲜花就像佳人那红润的面庞。江中的渔火就像飞舞的流萤。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 111,
    title: "秋浦歌十七首·其十五",
    author: "李白",
    dynasty: "唐代",
    content: ["白发三千丈", "缘愁似个长", "不知明镜里", "何处得秋霜"],
    paraphrase: "那一头白发好像有三千多丈长。全是因为内心的愁绪才会长得这么长。不知道明亮的镜子里。从哪里得来了这一层白如秋霜的头发。",
    difficulty: Difficulty.EASY
  },
  {
    id: 112,
    title: "哭晁卿衡",
    author: "李白",
    dynasty: "唐代",
    content: ["日本晁卿辞帝都", "征帆一片虏云边", "明月不归沉碧海", "白云愁色满苍梧"],
    paraphrase: "日本友人晁衡告别了长安帝都。像一片征帆驶向那远方的云天。可叹你像那明月一样再也没有回来，沉没在了茫茫碧海中。白云也带着愁色，笼罩着苍梧之地。",
    difficulty: Difficulty.HARD
  },
  {
    id: 113,
    title: "赠汪伦",
    author: "李白",
    dynasty: "唐代",
    content: ["李白乘舟将欲行", "忽闻岸上踏歌声", "桃花潭水深千尺", "不及汪伦送我情"],
    paraphrase: "李白坐上小船正要出发。忽然听到岸上传来踏歌送别的声音。即使桃花潭的水有千尺深。也比不上汪伦来送我的这一份深情。",
    difficulty: Difficulty.EASY
  },
  {
    id: 114,
    title: "早发白帝城",
    author: "李白",
    dynasty: "唐代",
    content: ["朝辞白帝彩云间", "千里江陵一日还", "两岸猿声啼不住", "轻舟已过万重山"],
    paraphrase: "清晨告别在那彩云缭绕的白帝城。远在千里的江陵仅仅一天时间就能抵达。两岸猿猴的啼叫声还在耳边回荡。轻快的小船早已穿过重重的高山峻岭。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 115,
    title: "望庐山瀑布",
    author: "李白",
    dynasty: "唐代",
    content: ["日照香炉生紫烟", "遥看瀑布挂前川", "飞流直下三千尺", "疑是银河落九天"],
    paraphrase: "香炉峰在阳光的照射下生起金色烟霞。从远处看去瀑布好似白色绢绸悬挂在山前。高崖上飞腾直落的瀑布好像有几千尺长。让人恍惚以为是银河从天上泻落到人间。",
    difficulty: Difficulty.EASY
  },
  {
    id: 116,
    title: "蜀道难",
    author: "李白",
    dynasty: "唐代",
    content: ["噫吁嚱危乎高哉", "蜀道之难难于上青天", "蚕丛及鱼凫", "开国何茫然"],
    paraphrase: "啊！多么高险多么雄伟啊！蜀道之难，难于上青天。蚕丛和鱼凫，蜀国祖先立国的时候，是多么的渺茫啊。",
    difficulty: Difficulty.HARD
  },
  {
    id: 117,
    title: "梦游天姥吟留别",
    author: "李白",
    dynasty: "唐代",
    content: ["海客谈瀛洲", "烟涛微茫信难求", "越人语天姥", "云霞明灭或可睹"],
    paraphrase: "海外传来的消息都在谈论瀛洲。烟涛渺茫确实很难寻求。越人都在谈论天姥山。在云霞变幻中或许可以一见真容。",
    difficulty: Difficulty.HARD
  },
  {
    id: 118,
    title: "金陵酒肆留别",
    author: "李白",
    dynasty: "唐代",
    content: ["风吹柳花满店香", "吴姬压酒唤客尝", "金陵子弟来相送", "欲行不行各尽觞"],
    paraphrase: "春风吹拂着柳絮，酒店中布满了香气。江南女子正在压酒招呼客人品尝。金陵的好友们都赶来送行。在这离别时刻，我们都举杯痛饮。",
    difficulty: Difficulty.HARD
  },
  {
    id: 119,
    title: "秋登宣城谢朓北楼",
    author: "李白",
    dynasty: "唐代",
    content: ["江城如画里", "山晚望晴空", "两水夹明镜", "双桥落彩虹"],
    paraphrase: "江边的城郭就像在画中一样。傍晚在山上凝望着晴朗的天空。两条江水就像明镜一样将城池夹在中间。两座桥梁跨在江上，就像那横跨天际的彩虹。",
    difficulty: Difficulty.HARD
  },
  {
    id: 120,
    title: "赠孟浩然",
    author: "李白",
    dynasty: "唐代",
    content: ["吾爱孟夫子", "风流天下闻", "红颜弃轩冕", "白首卧松云"],
    paraphrase: "我最敬爱那孟夫子。他的才气和风采天下闻名。他在风华正茂时就舍弃了高官厚禄。白了头发依然隐居在苍松白云之间。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 121,
    title: "寒食",
    author: "韩翃",
    dynasty: "唐代",
    content: ["春城无处不飞花", "寒食东风御柳斜", "日暮汉宫传蜡烛", "轻烟散入五侯家"],
    paraphrase: "春天的京城到处飞舞着花瓣。寒食节的东风吹斜了御花园的柳枝。日落黄昏，皇宫中分发着蜡烛。轻烟飘散，进入了显赫的贵族人家。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 122,
    title: "长安晚秋",
    author: "赵嘏",
    dynasty: "唐代",
    content: ["云物凄清拂曙流", "汉家宫阙动高秋", "残星几点雁横塞", "长笛一声人倚楼"],
    paraphrase: "云气凄清，在拂晓时刻流动。汉家宫殿仿佛因高远的秋色而动。天边还剩下几点残星，大雁横穿塞外。一声悠扬的笛声中，有人正静静地依偎在楼头。",
    difficulty: Difficulty.HARD
  },
  {
    id: 123,
    title: "早秋",
    author: "许浑",
    dynasty: "唐代",
    content: ["遥夜泛清瑟", "西风生翠萝", "残灯无焰影", "孤枕有眠多"],
    paraphrase: "遥远的深夜里传来了清脆的琴声。凄冷的西风在翠绿的藤萝间生起。残缺的灯光已经没有了火焰。孤单的枕边，旅人的眠梦显得格外漫长。",
    difficulty: Difficulty.HARD
  },
  {
    id: 124,
    title: "咸阳城东楼",
    author: "许浑",
    dynasty: "唐代",
    content: ["一上高楼万里愁", "蒹葭杨柳似汀洲", "溪云初起日沉阁", "山雨欲来风满楼"],
    paraphrase: "一旦登上了这咸阳城东楼，万里愁绪便涌上心头。江边的芦苇和杨柳就像那小洲上的景色。溪云刚刚升起，夕阳沉没在了楼阁之后。山雨将要到来，大风已经吹满了整座城楼。",
    difficulty: Difficulty.HARD
  },
  {
    id: 125,
    title: "筹笔驿",
    author: "李商隐",
    dynasty: "唐代",
    content: ["猿鸟犹疑畏简书", "风云常为护储胥", "徒令上将挥神笔", "终见诸侯上猛车"],
    paraphrase: "猿猴和飞鸟似乎还畏惧着当年的军令。山中的风云也常像在守护着军营。徒然让诸葛丞相在这里挥动神笔筹划万全。到头来却还是眼睁睁看着诸侯们载着猛将步步进逼。",
    difficulty: Difficulty.HARD
  },
  {
    id: 126,
    title: "隋宫",
    author: "李商隐",
    dynasty: "唐代",
    content: ["紫泉宫殿锁烟霞", "欲取芜城作帝家", "玉玺不缘归日角", "锦帆应是到天涯"],
    paraphrase: "长安宫殿被晚霞紧锁。隋炀帝一门心思想要把扬州建成帝王家。要不是皇位最终归了真龙天子李渊。恐怕隋炀帝的这艘锦帆龙船还要一直划向天涯海角。",
    difficulty: Difficulty.HARD
  },
  {
    id: 127,
    title: "贾生",
    author: "李商隐",
    dynasty: "唐代",
    content: ["宣室求贤访逐臣", "贾生才调更无伦", "可怜夜半虚前席", "不问苍生问鬼神"],
    paraphrase: "汉文帝在宣室寻访贤才。贾谊的才气天下无双。可惜文帝深夜里虚心侧耳倾听。却偏偏不问国家大事，反而问起了鬼神之事。",
    difficulty: Difficulty.HARD
  },
  {
    id: 128,
    title: "锦瑟",
    author: "李商隐",
    dynasty: "唐代",
    content: ["锦瑟无端五十弦", "一弦一柱思华年", "庄生晓梦迷蝴蝶", "望帝春心托杜鹃"],
    paraphrase: "锦瑟为何无端有五十根弦呢？每一根弦都勾起我对往昔岁月的追思。正如庄周在梦中迷恋蝴蝶，望帝把满腔幽怨托付给杜鹃。",
    difficulty: Difficulty.HARD
  },
  {
    id: 129,
    title: "无题",
    author: "李商隐",
    dynasty: "唐代",
    content: ["相见时难别亦难", "东风无力百花残", "春蚕到死丝方尽", "蜡炬成灰泪始干"],
    paraphrase: "彼此相见时很难，分别时更加痛苦。春天即将结束，东风已经没有了力量，百花在凋零。春蚕直到死时才会把丝吐尽，红蜡烛要等到烧成灰烬时，泪滴才会流干。",
    difficulty: Difficulty.HARD
  },
  {
    id: 130,
    title: "乐游原",
    author: "李商隐",
    dynasty: "唐代",
    content: ["向晚意不适", "驱车登古原", "夕阳无限好", "只是近黄昏"],
    paraphrase: "临近傍晚时心情不佳。便驾车登上乐游古原。夕阳的晚景的确无限美好。可惜已经接近黄昏，美景即将消失。",
    difficulty: Difficulty.EASY
  },
  {
    id: 131,
    title: "嫦娥",
    author: "李商隐",
    dynasty: "唐代",
    content: ["云母屏风烛影深", "长河渐落晓星沉", "嫦娥应悔偷灵药", "碧海青天夜夜心"],
    paraphrase: "云母屏风上升起了深沉的烛影。银河渐渐西下，启明星也消失在晓色中。嫦娥想必也后悔偷吃了长生不老药。如今在碧海青天中，夜夜都要忍受孤独的内心之苦。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 132,
    title: "题都城南庄",
    author: "崔护",
    dynasty: "唐代",
    content: ["去年今日此门中", "人面桃花相映红", "人面不知何处去", "桃花依旧笑春风"],
    paraphrase: "去年的今天，在这道门里，那位姑娘的脸庞在桃花的映衬下显得格外红润。如今姑娘已不知去向，唯有美丽的桃花依然如故，在春风中自由自在地开着。",
    difficulty: Difficulty.EASY
  },
  {
    id: 133,
    title: "金缕衣",
    author: "杜秋娘",
    dynasty: "唐代",
    content: ["劝君莫惜金缕衣", "劝君惜取少年时", "花开堪折直须折", "莫待无花空折枝"],
    paraphrase: "我劝你不要怜惜那件华贵的金缕衣。我劝你一定要珍惜少年美好的时光。花朵盛开可以折取的时候就要立刻折取。千万不要等到花儿凋谢了，再去徒劳地折空树枝。",
    difficulty: Difficulty.EASY
  },
  {
    id: 134,
    title: "金谷园",
    author: "杜牧",
    dynasty: "唐代",
    content: ["繁华事散逐香尘", "流水无情草自春", "日暮东风怨啼鸟", "落花犹似坠楼人"],
    paraphrase: "往日的繁华已经随着香尘散去。流水依然无情，野草自在地展现春色。傍晚的东风中鸟儿啼叫似乎含着幽怨。那零落的花瓣，就像当年那位可怜的坠楼女子一样。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 135,
    title: "赤壁",
    author: "杜牧",
    dynasty: "唐代",
    content: ["折戟沉沙铁未销", "自将磨洗认前朝", "东风不与周郎便", "铜雀春深锁二乔"],
    paraphrase: "折断的战戟沉没在泥沙中，铁质还没有锈蚀殆尽。我把它捡起来磨洗干净，认出这是前朝的遗物。如果当年的东风不给周瑜方便，恐怕大乔和小乔都已经深藏在铜雀台中，被曹操锁住了。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 136,
    title: "泊秦淮",
    author: "杜牧",
    dynasty: "唐代",
    content: ["烟笼寒水月笼沙", "夜泊秦淮近酒家", "商女不知亡国恨", "隔江犹唱后庭花"],
    paraphrase: "迷蒙的雾气笼罩着江水，月光铺在沙滩上。夜晚停泊在秦淮河边，靠近那灯红酒绿的酒楼。卖唱的女子不懂得国家兴亡的遗恨，竟然在江对岸还在唱着那首亡国之音《后庭花》。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 137,
    title: "寄扬州韩绰判官",
    author: "杜牧",
    dynasty: "唐代",
    content: ["青山隐隐水迢迢", "秋尽江南草未凋", "二十四桥明月夜", "玉人何处教吹箫"],
    paraphrase: "远处的青山隐约可见，江水迢迢流向远方。虽然秋天已尽，但江南的草儿还没有凋零。在那二十四桥明月照耀的夜晚。你这位玉人此时正在什么地方教人吹箫呢？",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 138,
    title: "江南春",
    author: "杜牧",
    dynasty: "唐代",
    content: ["千里莺啼绿映红", "水村山郭酒旗风", "南朝四百八十寺", "多少楼台烟雨中"],
    paraphrase: "辽阔的江南到处莺歌燕舞，绿树红花交相辉映，临水的村庄、依山的城郭，酒旗在春风中飘扬。南朝遗留下来的四百八十座寺庙，如今有多少楼台笼罩在迷蒙的烟雨之中。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 139,
    title: "遣怀",
    author: "杜牧",
    dynasty: "唐代",
    content: ["落魄江湖载酒行", "楚腰纤细掌中轻", "十年一觉扬州梦", "赢得青楼薄幸名"],
    paraphrase: "落魄地流落江湖，带着美酒四处游逛。沉溺于江南女子的温柔乡。十年来在扬州的经历就像一场大梦。到头来只落得个青楼里的浪荡薄情名声。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 140,
    title: "赠别",
    author: "杜牧",
    dynasty: "唐代",
    content: ["多情却似总无情", "唯觉樽前笑不成", "蜡烛有心还惜别", "替人垂泪到天明"],
    paraphrase: "多情的人有时候反而显得像无情一样。只感到在酒席前连笑容都无法强颜。蜡烛似乎也有心在惋惜我们的告别。它替我们流下了泪滴，直到天亮。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 141,
    title: "秋夕",
    author: "杜牧",
    dynasty: "唐代",
    content: ["银烛秋光冷画屏", "轻罗小扇扑流萤", "天阶夜色凉如水", "卧看牵牛织女星"],
    paraphrase: "秋夜里，精美的屏风笼罩在银白色烛光的清冷氛围中，我手拿丝织的小扇轻扑飞舞的流萤。石阶上的夜色凉快如水，我静静卧着凝望天上的牵牛星和织女星。",
    difficulty: Difficulty.EASY
  },
  {
    id: 142,
    title: "寻隐者不遇",
    author: "贾岛",
    dynasty: "唐代",
    content: ["松下问童子", "言师采药去", "只在此山中", "云深不知处"],
    paraphrase: "在松树下询问隐者的童子。他说师父已经去山里采药了。师父就在这山里，可是云雾缭绕。不知道到底在哪个地方。",
    difficulty: Difficulty.EASY
  },
  {
    id: 143,
    title: "题大庚岭北驿",
    author: "宋之问",
    dynasty: "唐代",
    content: ["阳月南飞雁", "传闻至此回", "我行殊未已", "何日复归来"],
    paraphrase: "十月里大雁向南方飞去。听说到了这里就会返回。而我的旅途还远没有结束。到底哪一天才能重新回来呢？",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 144,
    title: "渡荆门送别",
    author: "李白",
    dynasty: "唐代",
    content: ["渡远荆门外", "来从楚国游", "山随平野尽", "江入大荒流"],
    paraphrase: "乘船来到遥远的荆门关外。来到这楚国故地游览。高山随着平旷的原野渐渐消失。大江流向那辽阔无边的荒野。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 145,
    title: "送友",
    author: "李白",
    dynasty: "唐代",
    content: ["青山横北郭", "白水绕东城", "此地一为别", "孤蓬万里征"],
    paraphrase: "青山横亘在城北。白色的江水绕过城东。在这里我们就要离别了。你将像那随风飘荡的孤蓬，从此开启万里征程。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 146,
    title: "秋歌",
    author: "李白",
    dynasty: "唐代",
    content: ["长安一片月", "万户捣衣声", "秋风吹不尽", "总是玉关情"],
    paraphrase: "长安城笼罩在一片月光下。万户人家传出了捣衣声。秋风吹不尽那浓浓的思念。全都是寄往那远方的玉门关情。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 147,
    title: "夜下征虏亭",
    author: "李白",
    dynasty: "唐代",
    content: ["船下广陵去", "月明征虏亭", "山花如绣颊", "江火似流萤"],
    paraphrase: "船只驶离去往广陵。月光照在征虏亭上。山花红艳艳像女子的面颊。江中渔火闪烁像低飞的流萤。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 148,
    title: "客中作",
    author: "李白",
    dynasty: "唐代",
    content: ["兰陵美酒郁金香", "玉碗盛来琥珀光", "但使主人能醉客", "不知何处是他乡"],
    paraphrase: "兰陵的美酒散发着诱人的香气。玉碗中盛放着像琥珀一样的美酒光泽。只要主人能让我在这里大快朵颐。哪里还知道这里竟然是他乡呢。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 149,
    title: "宫词",
    author: "薛逢",
    dynasty: "唐代",
    content: ["十二楼中尽晓妆", "望仙楼上望君王", "锁衔金兽连环冷", "水滴铜龙昼漏长"],
    paraphrase: "深宫的十二楼中。女子们都在清晨梳妆打扮。登高望仙楼。眼巴巴盼着君王的驾临。宫门深锁。冷冰冰的门环。听着那漫漫长日的计时水滴声。",
    difficulty: Difficulty.HARD
  },
  {
    id: 150,
    title: "金陵酒肆留别",
    author: "李白",
    dynasty: "唐代",
    content: ["风吹柳花满店香", "吴姬压酒唤客尝", "金陵子弟来相送", "欲行不行各尽觞"],
    paraphrase: "春风吹落了柳花，满店都飘散着芬芳。吴地的女子在酿酒，吆喝着客人前来品尝。金陵的子弟们都来为我送行。大家依依不舍，各尽杯中之酒。",
    difficulty: Difficulty.HARD
  },
  {
    id: 151,
    title: "琵琶行",
    author: "白居易",
    dynasty: "唐代",
    content: ["大弦嘈嘈如急雨", "小弦切切如私语", "嘈嘈切切错杂弹", "大珠小珠落玉盘"],
    paraphrase: "粗弦声音沉重雄浑，就像急骤的雨点；细弦声音细促轻柔，就像恋人的呢喃，轻重缓急错落有致地弹奏，就像是大珠小珠清脆地落在玉盘上。",
    difficulty: Difficulty.HARD
  },
  {
    id: 152,
    title: "长恨歌",
    author: "白居易",
    dynasty: "唐代",
    content: ["在天愿作比翼鸟", "在地愿为连理枝", "天长地久有时尽", "此恨绵绵无绝期"],
    paraphrase: "在天上愿意成为双宿双飞的比翼鸟，在地上愿意成为枝干相连的连理枝。即使这一方天地有尽头，这份遗憾思念也会永无止境。",
    difficulty: Difficulty.HARD
  },
  {
    id: 153,
    title: "寒食",
    author: "韩翃",
    dynasty: "唐代",
    content: ["春城无处不飞花", "寒食东风御柳斜", "日暮汉宫传蜡烛", "轻烟散入五侯家"],
    paraphrase: "整个京城到处是落花飞舞。寒食节的东风吹斜了御花园的柳枝。日落时刻，皇宫中传出了蜡烛。轻烟飘散，进入了那些显赫的权贵人家。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 154,
    title: "枫桥夜泊",
    author: "张继",
    dynasty: "唐代",
    content: ["月落乌啼霜满天", "江枫渔火对愁眠", "姑苏城外寒山寺", "夜半钟声到客船"],
    paraphrase: "月亮落下，乌鸦啼叫，寒霜布满长空。岸边的枫树和渔火对着充满愁绪的我。姑苏城外的寒山寺，半夜的钟声传到了旅人的船头。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 155,
    title: "滁州西涧",
    author: "韦应物",
    dynasty: "唐代",
    content: ["独怜幽草涧边生", "上有黄鹂深树鸣", "春潮带雨晚来急", "野渡无人舟自横"],
    paraphrase: "我只喜爱那生长在溪涧边的幽幽野草。上面传来了深深树丛中黄鹂的鸣叫。傍晚春潮带着雨水更加急促。荒野的渡口空无一人，只有小船自在地横在江心。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 156,
    title: "秋夜寄邱员外",
    author: "韦应物",
    dynasty: "唐代",
    content: ["怀君属秋夜", "散步咏凉天", "空山松子落", "幽人应未眠"],
    paraphrase: "在这深秋的夜晚分外怀念你。我散步咏叹这清凉的天气。寂静的山中听到了松子落下的声音。想必你这位隐居的友人此时也还没有入睡吧。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 157,
    title: "赋得古原草送别",
    author: "白居易",
    dynasty: "唐代",
    content: ["离离原上草", "一岁一枯荣", "野火烧不尽", "春风吹又生"],
    paraphrase: "原野上茂盛的野草啊。每年都要经历一次枯萎和繁茂。任凭那野火连天也烧不尽它们的根。春风一吹，它们又会生机勃勃地长出来。",
    difficulty: Difficulty.EASY
  },
  {
    id: 158,
    title: "问刘十九",
    author: "白居易",
    dynasty: "唐代",
    content: ["绿蚁新醅酒", "红泥小火炉", "晚来天欲雪", "能饮一杯无"],
    paraphrase: "刚刚酿出的带着绿泡沫的米酒。还有红泥做成的小火炉。傍晚天色阴沉快要下雪了。朋友啊，你能过来喝一杯吗？",
    difficulty: Difficulty.EASY
  },
  {
    id: 159,
    title: "后宫词",
    author: "白居易",
    dynasty: "唐代",
    content: ["泪湿罗巾梦不成", "夜深前殿按歌声", "红颜未老恩先断", "斜倚薰笼坐到明"],
    paraphrase: "眼泪湿透了手帕，梦也做不成。深夜里还听到前殿传来的乐舞声。美丽的容颜还没衰老，君恩却已断绝。只能斜靠着薰笼，独自坐到天亮。",
    difficulty: Difficulty.HARD
  },
  {
    id: 160,
    title: "望月怀远",
    author: "张九龄",
    dynasty: "唐代",
    content: ["海上生明月", "天涯共此时", "情人怨遥夜", "竟夕起相思"],
    paraphrase: "辽阔的海面上生起一轮明月。远在天涯此时都在共同守望。多情的人怨恨这漫漫长夜。整夜整夜地心中充满了思念。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 161,
    title: "照镜见白发",
    author: "张九龄",
    dynasty: "唐代",
    content: ["宿昔青门里", "今朝白发多", "以兹感物候", "安得不蹉跎"],
    paraphrase: "过去还在那青门附近生活。今天早晨镜子里的白发竟然这么多了。由此感叹时光的变迁。怎么能不感叹岁月的流逝和蹉跎呢。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 162,
    title: "感遇四首·其一",
    author: "张九龄",
    dynasty: "唐代",
    content: ["兰叶春葳蕤", "桂华秋皎洁", "欣欣此生意", "自尔为佳节"],
    paraphrase: "春天的兰叶茂盛。秋天的桂花洁净。它们欣欣向荣地展现着生命。自然而然地就把这个季节装点成了佳节。",
    difficulty: Difficulty.HARD
  },
  {
    id: 163,
    title: "渡浙江问舟子",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["浙江悠悠海西流", "塔色层层在水楼", "问君何事轻离别", "一泛孤船万里秋"],
    paraphrase: "浙江水悠悠向西流向大海。岸边宝塔的影子倒映在水中的楼阁。请问你为何轻易地就要离别。独自驾着一叶孤舟，在万里秋色中远行。",
    difficulty: Difficulty.HARD
  },
  {
    id: 164,
    title: "早寒江上有怀",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["木落雁南度", "北风江上寒", "我家襄水曲", "遥隔楚云端"],
    paraphrase: "树叶凋落，大雁往南方飞。北风吹在江面上感到丝丝寒意。我的故乡就在襄水转弯的地方。此刻遥远地隔在楚地的云端。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 165,
    title: "临洞庭",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["八月湖水平", "涵虚混太清", "气蒸云梦泽", "波撼岳阳城"],
    paraphrase: "八月的湖水高涨。水色天光连成一片清明。水气蒸腾，笼罩着云梦泽。波涛汹涌，震撼着岳阳古城。",
    difficulty: Difficulty.HARD
  },
  {
    id: 166,
    title: "与诸子登岘山",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["人事有代谢", "往来成古今", "江山留胜迹", "我辈复登临"],
    paraphrase: "人间的世事在不断交替更迭。古往今来都在这变迁之中。江山留下了千古名胜。我们这些人今天又来登顶远眺。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 167,
    title: "宴梅道士山房",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["林卧涉经岁", "山家空更深", "开襟坐霄汉", "挥手弄鸣琴"],
    paraphrase: "长期在这山林中隐居已经过了一年。山里的人家，深夜显得格外幽静。敞开衣襟面对着浩渺的天际。挥手弹奏一曲清脆的琴声。",
    difficulty: Difficulty.HARD
  },
  {
    id: 168,
    title: "岁暮归南山",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["北阙休上书", "南山归敝庐", "不才明主弃", "多病故人疏"],
    paraphrase: "不要再幻想去皇宫上书求职了。还是回到南山的破旧茅屋里吧。我因为没有才能被明君抛弃。又因为多病，连老朋友也疏远了。",
    difficulty: Difficulty.HARD
  },
  {
    id: 169,
    title: "留别王侍御维",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["寂寂竟何待", "朝朝空自归", "欲寻芳草去", "惜与故人违"],
    paraphrase: "如此寂静孤独还要等待什么呢？每天都是白忙一场回到住处。想要寻找一片世外桃源去隐居。只是可惜要和老朋友你分别了。",
    difficulty: Difficulty.HARD
  },
  {
    id: 170,
    title: "秦中寄远上人",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["一丘常欲卧", "三径苦无资", "北阙休上书", "南山归敝庐"],
    paraphrase: "真想在这山丘之上长久隐居下。可惜连简单的隐居生活也缺乏资费。不要再想着去朝廷博取功名了。还是老老实实回南山去吧。",
    difficulty: Difficulty.HARD
  },
  {
    id: 171,
    title: "宿业师山房待丁大不至",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["夕阳度西岭", "群壑倏已暝", "松月生夜凉", "风泉满清听"],
    paraphrase: "夕阳已经越过了西边的山岭。万千山壑瞬间落入了夜色。松间的明月带来了夜晚的清凉。泉水丁冬，充满了耳朵里的听觉。",
    difficulty: Difficulty.HARD
  },
  {
    id: 172,
    title: "晚泊浔阳望庐山",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["挂席几千里", "名山都未逢", "泊舟浔阳郭", "始见香炉峰"],
    paraphrase: "驶过几千里的水路。一直没有遇到什么名山。今天把船停在浔阳的城外。终于第一眼看到了著名的香炉峰。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 173,
    title: "清思",
    author: "李白",
    dynasty: "唐代",
    content: ["暮从碧山下", "山月随人归", "却顾所来径", "苍苍横翠微"],
    paraphrase: "傍晚从青翠的山上走下。山间的月亮伴随着路人归家。回头望着刚刚走过的路径。一片苍茫，横亘在翠绿的山中古。 ",
    difficulty: Difficulty.HARD
  },
  {
    id: 174,
    title: "访戴天山道士不遇",
    author: "李白",
    dynasty: "唐代",
    content: ["犬吠水声中", "桃花带露浓", "树深时见鹿", "溪午不闻钟"],
    paraphrase: "水流声中夹杂着犬吠。桃花带着晶莹的露珠。树林深处不时可以见到麋鹿。正午的溪边听不到寺庙的钟声。 ",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 175,
    title: "送杨山人归嵩山",
    author: "李白",
    dynasty: "唐代",
    content: ["我有万古宅", "嵩阳玉女峰", "长留一片月", "挂在东溪松"],
    paraphrase: "我也有一处可以永久安身的居所。就在嵩山那玉女峰上。长久地留着这一片明月。把它高高地挂在东边小溪的松树上。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 176,
    title: "送魏万之京",
    author: "李颀",
    dynasty: "唐代",
    content: ["朝闻游子唱离歌", "昨夜微霜初渡河", "鸿雁不堪愁里听", "云山况是客中过"],
    paraphrase: "清晨听到你要唱着离歌。昨晚的微霜里我刚刚渡过江河。在愁云中无法忍受大雁的哀鸣。何况在这旅途中又要经过重重的云山。",
    difficulty: Difficulty.HARD
  },
  {
    id: 177,
    title: "送李端",
    author: "卢纶",
    dynasty: "唐代",
    content: ["故关衰草遍", "离别自堪悲", "路出寒云外", "人在暮阳时"],
    paraphrase: "故乡的关口到处长满了枯草。分别时刻自然让人感到悲哀。道路一直伸向寒冷的云层之外。人影在那夕阳西下时显得孤独。 ",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 178,
    title: "喜见外弟又别",
    author: "李益",
    dynasty: "唐代",
    content: ["十年离乱后", "长大一相逢", "问姓惊初见", "称名忆旧容"],
    paraphrase: "在十年的战乱离散后。长大成人的我们再次相逢。第一次见到时甚至要询问姓氏。听到名字才回忆起你小时候的容颜。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 179,
    title: "送征雁",
    author: "钱起",
    dynasty: "唐代",
    content: ["秋风度河上", "大雁向南飞", "莫道弦声切", "离人心自知"],
    paraphrase: "秋风吹拂过河面。成群的大雁正向南方飞去。不要说那琴弦的声音太过凄切。离别的人内心的苦闷只有自己知晓。 ",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 180,
    title: "晚次鄂州",
    author: "卢纶",
    dynasty: "唐代",
    content: ["云帆望极处", "江流天地外", "山色有无中", "郡邑浮前浦"],
    paraphrase: "帆影一直望到天边。大江流向了天地之外。远处的山色若隐若现。城郭仿佛漂浮在前面的小洲。 ",
    difficulty: Difficulty.HARD
  },
  {
    id: 181,
    title: "江乡故人偶集客舍",
    author: "戴叔伦",
    dynasty: "唐代",
    content: ["天秋月又满", "城阙夜千重", "还作江南会", "翻疑梦里逢"],
    paraphrase: "秋天到了月亮重新变圆。千重城门锁在夜色中。既然是在江南再次相聚。反而怀疑这竟然是在梦中相遇。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 182,
    title: "送僧归日本",
    author: "钱起",
    dynasty: "唐代",
    content: ["上国随缘住", "来途若梦行", "浮天沧海远", "去世法舟轻"],
    paraphrase: "你在上国唐朝随缘居住。前来的旅途就像是一场大梦。浩渺的苍海遥不可及。离开这里，佛法的扁舟显得格外轻快。",
    difficulty: Difficulty.HARD
  },
  {
    id: 183,
    title: "谷口书斋寄杨补阙",
    author: "钱起",
    dynasty: "唐代",
    content: ["泉壑带茅茨", "云霞生曙姿", "竹怜新雨后", "山爱夕阳时"],
    paraphrase: "山泉和壑谷伴随着简陋的茅屋。曙光中云霞变换着身姿。我最怜爱雨后的竹林。在那夕阳西下时我也格外喜爱这山色。 ",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 184,
    title: "淮上喜会梁州故人",
    author: "韦应物",
    dynasty: "唐代",
    content: ["江汉曾为客", "相逢每醉还", "浮云一别后", "流水十年间"],
    paraphrase: "在江汉平原我们也曾共同客居。每次相逢都要不醉不归。自从那浮云一别后。整整十年的时光已经随流水般匆匆而过。",
    difficulty: Difficulty.EASY
  },
  {
    id: 185,
    title: "赋得暮雨送李曹",
    author: "韦应物",
    dynasty: "唐代",
    content: ["楚江微雨里", "建业暮钟时", "漠漠帆来重", "冥冥鸟去迟"],
    paraphrase: "在楚江的小雨中。那是建业城傍晚钟声响起的时候。帆影在茫茫细雨中显得沉重。暮色阴沉，鸟儿飞去的身影也显得迟缓。 ",
    difficulty: Difficulty.HARD
  },
  {
    id: 186,
    title: "晚次乐乡县",
    author: "可止",
    dynasty: "唐代",
    content: ["故园渺何处", "归思方悠哉", "海内芳草色", "离人满目悲"],
    paraphrase: "家乡渺茫在何处？归家的思念正悠长。海内到处都有那绿草。但在离别的人眼中，满目都是悲哀。 ",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 187,
    title: "秋暮圣言",
    author: "李嘉祐",
    dynasty: "唐代",
    content: ["秋风满庭户", "一叶正如来", "不知故乡事", "日夕望南台"],
    paraphrase: "秋风灌满了庭院的门窗。一片落叶刚好飘了过来。不知道故乡的情况。每天早晚只是凝望着那南边的台。 ",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 188,
    title: "同从弟南斋玩月忆山阴崔少府",
    author: "王昌龄",
    dynasty: "唐代",
    content: ["高卧南斋时", "开帷月初上", "清辉澹水木", "演漾在窗户"],
    paraphrase: "在南斋静静地躺着。打开窗帏月亮刚刚升起。清澈的月光照耀着水木。在窗户上荡漾着。 ",
    difficulty: Difficulty.HARD
  },
  {
    id: 189,
    title: "塞下曲·其一",
    author: "李白",
    dynasty: "唐代",
    content: ["五月天山雪", "无花只有寒", "笛中闻折柳", "春色未曾看"],
    paraphrase: "五月的天山上依然是大雪。看不见鲜花，只有阵阵寒气。在笛声中听到《折杨柳》的曲子。其实在这里压根还没有看见过春色。 ",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 190,
    title: "战城南",
    author: "李白",
    dynasty: "唐代",
    content: ["去年战桑干源", "今年战葱河道", "洗兵条支海上波", "放马天山雪中草"],
    paraphrase: "去年在桑干河源头作战。今年在葱河道上作战。在条支海的波浪中清洗兵器。在天山的积雪中放马吃草。",
    difficulty: Difficulty.HARD
  },
  {
    id: 191,
    title: "子夜吴歌·冬歌",
    author: "李白",
    dynasty: "唐代",
    content: ["明朝驿使发", "一夜攒向戎", "素手抽针冷", "那堪寄远人"],
    paraphrase: "明天早晨驿使就要出发了。这一整夜都在赶制冬衣。冻得发红的素手连拿针都感到寒冷。这满含深情的衣物，怎么能忍受寄给远方的亲人呢。",
    difficulty: Difficulty.HARD
  },
  {
    id: 192,
    title: "长相思·其二",
    author: "李白",
    dynasty: "唐代",
    content: ["日色欲尽花含烟", "月明欲素愁不眠", "赵瑟初停凤凰柱", "蜀琴欲奏鸳鸯弦"],
    paraphrase: "天色将晚，鲜花笼罩在烟雾中。月光洁净，我满怀愁绪无法入睡。停下那装饰着凤凰柱的赵瑟。正准备弹奏那鸳鸯弦的蜀琴。 ",
    difficulty: Difficulty.HARD
  },
  {
    id: 193,
    title: "登巴陵开元寺西阁",
    author: "贾至",
    dynasty: "唐代",
    content: ["江上苍苍烟", "孤阁在山巅", "客行殊未已", "何日复归田"],
    paraphrase: "江面上升起苍茫的烟雾。孤独的阁楼耸立在山巅。我的旅途还没有结束。到底哪一天才能回归田园隐居呢。 ",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 194,
    title: "晚登三山还望京邑",
    author: "谢朓 (南朝名作, 唐人推崇)",
    dynasty: "南齐",
    content: ["灞涘望长安", "河阳视京县", "白日丽飞甍", "参差皆可见"],
    paraphrase: "在灞水岸边眺望长安。就像在河阳注视着京畿之地。灿烂的日光映射在屋檐上。高低不平的建筑清晰可见。 ",
    difficulty: Difficulty.HARD
  },
  {
    id: 195,
    title: "出塞",
    author: "王昌龄",
    dynasty: "唐代",
    content: ["秦时明月汉时关", "万里长征人未还", "但使龙城飞将在", "不教胡马度阴山"],
    paraphrase: "依旧是秦汉时的明月和关口。万里的将士至今未还家。如果飞将军李广在那龙城里。绝不叫那敌人的马匹度过阴山。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 196,
    title: "闻官军收河南河北",
    author: "杜甫",
    dynasty: "唐代",
    content: ["剑外忽传收蓟北", "初闻涕泪满衣裳", "却看妻子愁何在", "漫卷诗书喜欲狂"],
    paraphrase: "在剑外忽然听到收复蓟北的消息。刚听到时眼泪洒满了衣裳。回头看妻子哪还有平日的忧愁。胡乱卷起诗书快活得简直要发狂了。 ",
    difficulty: Difficulty.HARD
  },
  {
    id: 197,
    title: "春望",
    author: "杜甫",
    dynasty: "唐代",
    content: ["国破山河在", "城春草木深", "感时花溅泪", "恨别鸟惊心"],
    paraphrase: "国家沦陷，只有山河依旧。长安城春意黯然，草木茂盛。感叹时局，连对花都想流泪。痛恨离别，听到鸟叫也感到心惊。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 198,
    title: "登高",
    author: "杜甫",
    dynasty: "唐代",
    content: ["风急天高猿啸哀", "渚清沙白鸟飞回", "无边落木萧萧下", "不尽长江滚滚来"],
    paraphrase: "风急天高，猿猴的叫声充满哀怨。水清沙白，鸟儿盘旋。落叶萧萧流下，江水滚滚流不完。",
    difficulty: Difficulty.HARD
  },
  {
    id: 199,
    title: "登岳阳楼",
    author: "杜甫",
    dynasty: "唐代",
    content: ["昔闻洞庭水", "今上岳阳楼", "吴楚东南坼", "乾坤日夜浮"],
    paraphrase: "早先就听过洞庭湖名声。今日终于登上岳阳楼。吴楚之地自此隔开。天地仿佛日夜都在湖中沉降。",
    difficulty: Difficulty.HARD
  },
  {
    id: 200,
    title: "江畔独步寻花其六",
    author: "杜甫",
    dynasty: "唐代",
    content: ["黄四娘家花满蹊", "千朵万朵压枝低", "留连戏蝶时时舞", "自在娇莺恰恰啼"],
    paraphrase: "黄四娘家家花满蹊，千万朵鲜花倾斜低垂。嬉戏的蝴蝶在这里流连忘返，时时翩翩起舞。自在的娇莺在这里发出婉转的啼鸣。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 201,
    title: "池上",
    author: "白居易",
    dynasty: "唐代",
    content: ["小娃撑小艇", "偷采白莲回", "不解藏踪迹", "浮萍一道开"],
    paraphrase: "一个小娃撑着小船，偷偷地采了白莲回来。他不懂得掩藏自己的行踪，水面的浮萍被小船推向两边，开出了一道水路。",
    difficulty: Difficulty.EASY
  },
  {
    id: 202,
    title: "秋夕",
    author: "杜牧",
    dynasty: "唐代",
    content: ["银烛秋光冷画屏", "轻罗小扇扑流萤", "天阶夜色凉如水", "卧看牵牛织女星"],
    paraphrase: "秋夜里，银白色的烛光映照着凄冷的屏风，手拿小扇轻扑着飞舞的流萤。夜色中的石阶寒凉如水，静静地躺着仰望天上的牵牛星和织女星。",
    difficulty: Difficulty.EASY
  },
  {
    id: 203,
    title: "乌衣巷",
    author: "刘禹锡",
    dynasty: "唐代",
    content: ["朱雀桥边野草花", "乌衣巷口夕阳斜", "旧时王谢堂前燕", "飞入寻常百姓家"],
    paraphrase: "朱雀桥边长满了野草野花，乌衣巷口夕阳西下。过去曾飞入王、谢豪门大堂的燕子，如今已飞入寻常百姓的人家里。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 204,
    title: "陋室铭",
    author: "刘禹锡",
    dynasty: "唐代",
    content: ["山不在高", "有仙则名", "水不在深", "有龙则灵", "斯是陋室", "惟吾德馨"],
    paraphrase: "山不在于高低，有仙人居住就会出名；水不在于深浅，有龙潜藏就会灵验。这是一间简陋的房子，只要我的品德芬芳，就不感到它简陋了。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 205,
    title: "石头城",
    author: "刘禹锡",
    dynasty: "唐代",
    content: ["山围故国周遭在", "潮打空城寂寞回", "淮水东边旧时月", "夜深还过女墙来"],
    paraphrase: "青山依旧环绕着旧日的都城，潮水拍打着寂静的空城又落寞地退去。秦淮河东边那轮古老的月亮，深夜里依然越过城墙巡视着这片废墟。",
    difficulty: Difficulty.HARD
  },
  {
    id: 206,
    title: "浪淘沙",
    author: "刘禹锡",
    dynasty: "唐代",
    content: ["九曲黄河万里沙", "浪淘风簸自天涯", "如今直上银河去", "同到牵牛织女家"],
    paraphrase: "曲折的黄河裹挟着万里泥沙，随波逐流大浪从天涯而来。现在我要顺着江水直冲云霄去往银河，和黄河一起去到牵牛和织女的家里。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 207,
    title: "竹枝词二首·其一",
    author: "刘禹锡",
    dynasty: "唐代",
    content: ["杨柳青青江水平", "闻郎江上唱歌声", "东边日出西边雨", "道是无晴却有晴"],
    paraphrase: "江边的杨柳青翠，江水平缓。听到情郎在江上传来动人的歌声。东边正在出太阳，西边却在下雨。说是没有晴天吧，却偏偏是个晴天（谐音：说没情吧，却偏偏有情）。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 208,
    title: "自河南经乱",
    author: "白居易",
    dynasty: "唐代",
    content: ["时难年荒世业空", "弟兄羁旅各西东", "田园寥落干戈后", "骨肉流离道路中"],
    paraphrase: "时局艰难年成荒凉，家业已空。兄弟们各奔东西流落他乡。战乱之后田园凋零，亲人们在颠沛流离中相散。",
    difficulty: Difficulty.HARD
  },
  {
    id: 209,
    title: "钱塘湖春行",
    author: "白居易",
    dynasty: "唐代",
    content: ["孤山寺北贾亭西", "水面初平云脚低", "几处早莺争暖树", "谁家新燕啄春泥"],
    paraphrase: "从孤山寺北走来，经过贾公亭。水面刚刚平齐，云朵也显得很低。几只早出的黄鹂在争抢向阳的树枝，不知道是谁家的燕子在忙着啄泥筑巢。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 210,
    title: "暮江吟",
    author: "白居易",
    dynasty: "唐代",
    content: ["一道残阳铺水中", "半江瑟瑟半江红", "可怜九月初三夜", "露似真珠月似弓"],
    paraphrase: "落日的余晖平铺在江面上。江水一半呈现青绿色，一半被映得火红。最惹人怜爱的是这九月初三的夜晚。晶莹的露珠像珍珠，弯弯的月亮像强弓。",
    difficulty: Difficulty.EASY
  },
  {
    id: 211,
    title: "宫词",
    author: "王建",
    dynasty: "唐代",
    content: ["回望高城落晓河", "长门灯火夜深多", "不知今日中庭里", "谁立秋风待过过"],
    paraphrase: "回头凝望着高城，银河正逐渐西坠。长门宫的灯火在深宵里显得格外的多。不知道今天的庭院里，又有谁在秋风中枯站着等待君王的驾临呢。",
    difficulty: Difficulty.HARD
  },
  {
    id: 212,
    title: "新嫁娘词",
    author: "王建",
    dynasty: "唐代",
    content: ["三日入厨下", "洗手作羹汤", "未谙姑食性", "先遣小姑尝"],
    paraphrase: "新媳妇过门三天就进了厨房。洗干净手为家人准备羹汤。因为还不知道婆婆的口味喜好。所以先请小姑过来尝一尝味道。",
    difficulty: Difficulty.EASY
  },
  {
    id: 213,
    title: "雨晴",
    author: "王驾",
    dynasty: "唐代",
    content: ["雨前初见花间叶", "雨后全无叶底花", "蝴蝶飞来过墙去", "应疑春色在邻家"],
    paraphrase: "雨前还看见花间长出了嫩叶。雨后却再也看不见那叶子底下的花了。蝴蝶飞过来又飞过了墙头。想必它也怀疑春色已经搬到邻居家里去了吧。",
    difficulty: Difficulty.EASY
  },
  {
    id: 214,
    title: "风",
    author: "李峤",
    dynasty: "唐代",
    content: ["解落三秋叶", "能开二月花", "过江千尺浪", "入竹万竿斜"],
    paraphrase: "风能使晚秋的树叶落地，能让二月的鲜花绽放。它吹过江面时能卷起千尺巨浪，飞入竹林时能使万竿竹子倾斜。",
    difficulty: Difficulty.EASY
  },
  {
    id: 215,
    title: "鸟鸣涧",
    author: "王维",
    dynasty: "唐代",
    content: ["人闲桂花落", "夜静春山空", "月出惊山鸟", "时鸣春涧中"],
    paraphrase: "很少有人走动，桂花在静静地飘落。深夜的春山显得格外空静。月亮出来惊动了山里的飞鸟，不时在春天的涧水旁发出婉转的啼鸣。",
    difficulty: Difficulty.EASY
  },
  {
    id: 216,
    title: "过故人庄",
    author: "孟浩然",
    dynasty: "唐代",
    content: ["故人具鸡黍", "邀我至田家", "绿树村边合", "青山郭外斜"],
    paraphrase: "老朋友准备了丰盛的农家饭菜。邀请我到他的田园作客。村边环绕着茂密的绿树。城郭外是一片连绵的青山。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 217,
    title: "送别",
    author: "王维",
    dynasty: "唐代",
    content: ["下马饮君酒", "问君何所之", "君言不得意", "归卧南山陲"],
    paraphrase: "请你下马喝了这杯酒吧。请问你要去哪里？你说自己在仕途不如意。准备回到终南山的边陲隐居去。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 218,
    title: "杂诗",
    author: "王维",
    dynasty: "唐代",
    content: ["君自故乡来", "应知故乡事", "来日绮窗前", "寒梅著花未"],
    paraphrase: "您是从我的家乡来的。一定知道家乡的事情。请问您出发那天，我家窗前那株傲寒的腊梅，开花了没有呢？",
    difficulty: Difficulty.EASY
  },
  {
    id: 219,
    title: "相思",
    author: "王维",
    dynasty: "唐代",
    content: ["红豆生南国", "春来发几枝", "愿君多采撷", "此物最相思"],
    paraphrase: "红豆生长在南方。春天到了，又长出了几家新枝？希望你能多多采摘一些。因为它最能代表人们那浓浓的相思之情了。",
    difficulty: Difficulty.EASY
  },
  {
    id: 220,
    title: "竹里馆",
    author: "王维",
    dynasty: "唐代",
    content: ["独坐幽篁里", "弹琴复长啸", "深林人不知", "明月来相照"],
    paraphrase: "我独自坐在幽深的竹林中。一边弹琴，一边大声隐啸。在深林中没有人知晓我的存在。只有天上的明月过来陪伴着我。",
    difficulty: Difficulty.EASY
  },
  {
    id: 221,
    title: "山居秋暝",
    author: "王维",
    dynasty: "唐代",
    content: ["空山新雨后", "天气晚来秋", "明月松间照", "清泉石上流"],
    paraphrase: "空旷的山中刚刚经历了一场新雨。傍晚时刻，秋意显得更加浓郁了。明亮的月光正照在松树林间。清澈的泉水在石缝中静静向外流淌。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 222,
    title: "九月九日忆山东兄弟",
    author: "王维",
    dynasty: "唐代",
    content: ["独在异乡为异客", "每逢佳节倍思亲", "遥知兄弟登高处", "遍插茱萸少一人"],
    paraphrase: "独自一个人流落他乡作为客人。每当遇到节日就会加倍思念亲人。遥想此时家乡的兄弟们正在登高望远。可是当大家插上茱萸时，却唯独少了我一个。",
    difficulty: Difficulty.EASY
  },
  {
    id: 223,
    title: "终南别业",
    author: "王维",
    dynasty: "唐代",
    content: ["中岁颇好道", "晚家南山陲", "兴来每独往", "胜事空自知", "行到水穷处", "坐看云起时"],
    paraphrase: "中年以后我十分喜爱佛道。晚年就在南山边陲安了家。兴致来时，经常独自漫步。美好的感悟唯有自己独自知晓。走到水的尽头，索性坐下来，看那云气悠然升起。",
    difficulty: Difficulty.HARD
  },
  {
    id: 224,
    title: "渭川田家",
    author: "王维",
    dynasty: "唐代",
    content: ["斜阳照墟落", "穷巷牛羊归", "野老念牧童", "倚杖候荆扉"],
    paraphrase: "夕阳的光辉照耀着村落。深巷中牛羊正在归家。村里的老人惦念着在山坡牧牛的孩子。正扶着拐杖在门口等候。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 225,
    title: "积雨辋川庄作",
    author: "王维",
    dynasty: "唐代",
    content: ["积雨空林烟火迟", "蒸藜炊黍饷东菑", "漠漠水田飞白鹭", "阴阴夏木啭黄鹂"],
    paraphrase: "空旷的山林里，由于积雨，炊烟袅袅升起得也迟。做好了饭菜送到田间犒劳劳作的家人。在那辽阔的水田中央，白鹭正在飞翔。在浓密的绿荫深处，黄鹂在清脆地鸣叫。",
    difficulty: Difficulty.HARD
  },
  {
    id: 226,
    title: "秋夜独坐",
    author: "王维",
    dynasty: "唐代",
    content: ["独坐悲双鬓", "空堂欲二更", "雨中山果落", "灯下草虫鸣"],
    paraphrase: "独自坐着，悲切地看着两鬓的白发。在这空荡荡的大堂中，时间已快到二更。在沥沥的雨声中，成熟的山果掉落在了地上。在微弱的灯光下，响起了蟋蟀的鸣叫声。",
    difficulty: Difficulty.HARD
  },
  {
    id: 227,
    title: "西施咏",
    author: "王维",
    dynasty: "唐代",
    content: ["艳色天下重", "西施宁久微", "朝为越溪女", "暮作吴宫妃"],
    paraphrase: "世人都非常看重绝佳的容貌。西施怎么可能一直卑微呢。早晨她还是那个越溪边浣纱的少女。傍晚就成了吴王宫中显贵的妃子了。",
    difficulty: Difficulty.HARD
  },
  {
    id: 228,
    title: "子夜四时歌·秋歌",
    author: "李白",
    dynasty: "唐代",
    content: ["长安一片月", "万户捣衣声", "秋风吹不尽", "总是玉关情"],
    paraphrase: "明亮的月光洒满长安。千家万户都传来了捣衣的声音。凛冽的秋风怎么也吹不散。这充满忧愁的对玉门关亲人的思念之情。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 229,
    title: "独坐敬亭山",
    author: "李白",
    dynasty: "唐代",
    content: ["众鸟高飞尽", "孤云独去闲", "相看两不厌", "只有敬亭山"],
    paraphrase: "成群的飞鸟已经高飞远去。天边的一朵孤云也悠闲地渐行渐远。彼此端详而永远不会感到厌烦的。看来这个世界上，只有眼前的敬亭山了。",
    difficulty: Difficulty.EASY
  },
  {
    id: 230,
    title: "长相思",
    author: "李白",
    dynasty: "唐代",
    content: ["长相思", "在长安", "孤灯不明思欲绝", "卷帷望月空长叹"],
    paraphrase: "无尽的思念啊。全都在遥远的长安。昏暗的孤灯下思念之情快要把人逼疯。卷起窗帘仰望明月，只能徒劳地发出一声声长叹。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 231,
    title: "行路难·其一",
    author: "李白",
    dynasty: "唐代",
    content: ["金樽清酒斗十千", "玉盘珍羞直万钱", "停杯投箸不能食", "拔剑四顾心茫然"],
    paraphrase: "金杯里的美酒价值连城。玉盘里的美味也昂贵无比。但我却放下了杯筷，无法咽下。我拔出宝剑看向四周，心里却充满了无尽的茫然。",
    difficulty: Difficulty.HARD
  },
  {
    id: 232,
    title: "月下独酌",
    author: "李白",
    dynasty: "唐代",
    content: ["花间一壶酒", "独酌无相亲", "举杯邀明月", "对影成三人"],
    paraphrase: "在花丛中摆好了这壶美酒。独自一人饮用，没有亲近的朋友。于是我举起酒杯邀请那明月。再加上地上的影子和我，正好三个人。",
    difficulty: Difficulty.EASY
  },
  {
    id: 233,
    title: "春思",
    author: "李白",
    dynasty: "唐代",
    content: ["燕草如碧丝", "秦桑低绿枝", "当君怀归日", "是妾断肠时"],
    paraphrase: "北方的燕草还刚长出像丝一般的嫩绿。而南方的桑树已经沉甸甸地低垂了绿枝。当你怀念家乡准备回来的时候。也正是我思念你到肝肠欲断的时候啊。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 234,
    title: "将进酒",
    author: "李白",
    dynasty: "唐代",
    content: ["君不见黄河之水天上来", "奔流到海不复回", "君不见高堂明镜悲白发", "朝如青丝暮成雪"],
    paraphrase: "难道你没看见黄河之水从天而降，一去不回地向着大海奔流吗？难道你没看见镜子中父母为满头白发而生出的悲哀吗？早晨还像黑色的丝丝青发，到了傍晚就变得像雪一般白了。",
    difficulty: Difficulty.HARD
  },
  {
    id: 235,
    title: "梦游天姥吟留别",
    author: "李白",
    dynasty: "唐代",
    content: ["海客谈瀛洲", "烟涛微茫信难求", "越人语天姥", "云霞明灭或可睹"],
    paraphrase: "海外来的客人都在谈论瀛洲的奇境。在烟涛渺茫的远方确实很难求得。而越地的人们都在谈论天姥山。在云霞变幻中或许可以见到它的真容。",
    difficulty: Difficulty.HARD
  },
  {
    id: 236,
    title: "宣州谢朓楼饯别校书叔云",
    author: "李白",
    dynasty: "唐代",
    content: ["弃我去者昨日之日不可留", "乱我心者今日之日多烦忧"],
    paraphrase: "抛弃我离去的昨天，已经无法挽留；扰乱我内心的今天，有着太多的烦恼和忧愁。",
    difficulty: Difficulty.HARD
  },
  {
    id: 237,
    title: "金陵酒肆留别",
    author: "李白",
    dynasty: "唐代",
    content: ["风吹柳花满店香", "吴姬压酒唤客尝", "金陵子弟来相送", "欲行不行各尽觞"],
    paraphrase: "春风吹拂着柳絮，整家店都充满了清香。江南女子正忙着压酒邀请客人来品尝。金陵的好友们都赶来为我送行。想走又舍不得走，让我们大家都痛饮一番吧。",
    difficulty: Difficulty.HARD
  },
  {
    id: 238,
    title: "秋登宣城谢朓北楼",
    author: "李白",
    dynasty: "唐代",
    content: ["江城如画里", "山晚望晴空", "两水夹明镜", "双桥落彩虹"],
    paraphrase: "江边的城郭就像在美丽的画卷里一样。傍晚时分，我在山上凝望着晴朗的天空。两条江水像明镜一样从两侧夹着城郭。两座桥跨在水面上，就像那落入凡尘的彩虹。",
    difficulty: Difficulty.HARD
  },
  {
    id: 239,
    title: "赠孟浩然",
    author: "李白",
    dynasty: "唐代",
    content: ["吾爱孟夫子", "风流天下闻", "红颜弃轩冕", "白首卧松云"],
    paraphrase: "我最敬重那孟夫子。他的才气和风采天下闻名。他在风华正茂时就舍弃了名利功名。头发白了依然在苍松白云间隐居修行。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 240,
    title: "渡荆门送别",
    author: "李白",
    dynasty: "唐代",
    content: ["渡远荆门外", "来从楚国游", "山随平野尽", "江入大荒流"],
    paraphrase: "乘船来到遥远的荆门关外。来到楚地的故国进行游历。层层高山随着广袤的原野而消失。大江之水仿佛流向了那辽阔无边的荒野。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 241,
    title: "送友",
    author: "李白",
    dynasty: "唐代",
    content: ["青山横北郭", "白水绕东城", "此地一为别", "孤蓬万里征"],
    paraphrase: "青山横贯在城北。清澈的河水绕过城东。在这里我们就要离别了。你将像那随风飘荡的孤蓬，从此开启万里的征程。",
    difficulty: Difficulty.EASY
  },
  {
    id: 242,
    title: "听蜀僧濬弹琴",
    author: "李白",
    dynasty: "唐代",
    content: ["蜀僧抱绿绮", "西下峨眉峰", "为我一挥手", "如听万壑松"],
    paraphrase: "四川的僧人怀抱着名贵的绿绮琴。从那西边的峨眉峰走下来。他为我挥手弹奏一曲。琴音清冽，就像听到了万壑松涛在耳边响起。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 243,
    title: "夜泊牛渚怀古",
    author: "李白",
    dynasty: "唐代",
    content: ["牛渚西江夜", "青天无片云", "登舟望秋月", "空忆谢将军"],
    paraphrase: "在牛渚山下的西江夜里。碧蓝的晴空中没有半点云彩。登上船头凝望着秋天的明月。我徒劳地追忆着当年的谢尚将军。",
    difficulty: Difficulty.HARD
  },
  {
    id: 244,
    title: "蜀相",
    author: "杜甫",
    dynasty: "唐代",
    content: ["丞相祠堂何处寻", "锦官城外柏森森", "映阶碧草自春色", "隔叶黄鹂空好音"],
    paraphrase: "诸葛丞相的祠堂在哪里可以寻到呢？就在锦官城外那个古柏茂盛的地方。在那映照台阶的绿草中，春色自顾自地展现。在那浓密的树叶中，黄鹂在独自传出美丽的歌声。",
    difficulty: Difficulty.HARD
  },
  {
    id: 245,
    title: "客至",
    author: "杜甫",
    dynasty: "唐代",
    content: ["舍南舍北皆春水", "但见群鸥日日来", "花径不曾缘客扫", "蓬门今始为君开"],
    paraphrase: "茅屋的南边北边全被春水环绕。我每天只看见成群的海鸥飞来。长满落花的小路从来没为客人打扫过。这扇柴门今天第一次为你而打开。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 246,
    title: "野望",
    author: "王绩",
    dynasty: "唐代",
    content: ["东皋薄暮望", "徙倚欲何依", "树树皆秋色", "山山唯落晖"],
    paraphrase: "在东边的草地上，傍晚时分凭栏凝望。心中徘徊游移不知道可以依靠在哪里。漫山遍野的树木都染上了秋色。每一座山峦都只被那落日的余晖笼罩。",
    difficulty: Difficulty.HARD
  },
  {
    id: 247,
    title: "感遇四首·其二",
    author: "张九龄",
    dynasty: "唐代",
    content: ["江南有丹橘", "经冬犹绿林", "岂伊地气暖", "自有岁寒心"],
    paraphrase: "江南生长着那红色的丹橘。即使经过了严冬，依然保留着绿林。难道仅仅是因为南方的地气比较温暖吗？其实是因为它们天生就有一颗能在岁寒中坚持的红心。",
    difficulty: Difficulty.HARD
  },
  {
    id: 248,
    title: "登幽州台歌",
    author: "陈子昂",
    dynasty: "唐代",
    content: ["前不见古人", "后不见来者", "念天地之悠悠", "独怆然而涕下"],
    paraphrase: "往前不见古代招贤纳士的圣明君主，向后看不见未来能识英雄者的后来人。想到这一方天地的辽阔与时间的悠长，我独自感怀，禁不住热泪横流。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 249,
    title: "次北固山下",
    author: "王湾",
    dynasty: "唐代",
    content: ["客路青山外", "行舟绿水前", "潮平两岸阔", "风正一帆悬"],
    paraphrase: "旅途在青山之外，小船在绿水间穿行。潮水上涨，两岸显得更加空旷。风向顺正，桅杆上的帆高高挂起。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 250,
    title: "终南山",
    author: "王维",
    dynasty: "唐代",
    content: ["太乙近天都", "连山到海隅", "白云回望合", "青霭入看无"],
    paraphrase: "巍峨的终南山靠近天帝居住的都城。长长的山脉一直延伸到了大海的角落。回头看去，白云已经聚拢。走进山中，青色的云气反而消失不见了。",
    difficulty: Difficulty.HARD
  },
  {
    id: 251,
    title: "咏柳",
    author: "贺知章",
    dynasty: "唐代",
    content: ["碧玉妆成一树高", "万条垂下绿丝绦", "不知细叶谁裁出", "二月春风似剪刀"],
    paraphrase: "高大的柳树像是用碧玉装饰成的一样。千万条垂下的柳枝就像绿色的丝带。不知道这细嫩的柳叶是谁剪裁出来的？原来是那二月的春风，就像一把灵巧的剪刀。",
    difficulty: Difficulty.EASY
  },
  {
    id: 252,
    title: "秋词",
    author: "刘禹锡",
    dynasty: "唐代",
    content: ["自古逢秋悲寂寥", "我言秋日胜春朝", "晴空一鹤排云上", "便引诗情到碧霄"],
    paraphrase: "自古以来，人们每逢秋天都会感到悲伤寂寞，我却说秋天比春天还要好。在晴朗的天空中，一只仙鹤排开云层直冲云霄，也把我的诗兴带到了蓝天之上。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 253,
    title: "山中",
    author: "王维",
    dynasty: "唐代",
    content: ["荆溪白石出", "天寒红叶稀", "山路元无雨", "空翠湿人衣"],
    paraphrase: "荆溪里的水已经减少，白色的石头露了出来。天气渐渐寒冷，山上的红叶已经稀少。山间的小路原本并没有下雨。但那浓密的绿色湿气仿佛打湿了人的衣裳。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 254,
    title: "凉州词",
    author: "王之涣",
    dynasty: "唐代",
    content: ["黄河远上白云间", "一片孤城万仞山", "羌笛何须怨杨柳", "春风不度玉门关"],
    paraphrase: "黄河远远地流向那白云缭绕的高山。一座孤零零的城郭坐落在万仞重山之中。羌笛何必吹奏那哀怨的《折杨柳》呢。你要知道，温暖的春风是吹不过那凄冷寂寞的玉门关的。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 255,
    title: "凉州词其一",
    author: "王翰",
    dynasty: "唐代",
    content: ["葡萄美酒夜光杯", "欲饮琵琶马上催", "醉卧沙场君莫笑", "古来征战几人回"],
    paraphrase: "精美的夜光杯里盛放着醇香的葡萄酒。正要痛快畅饮，琵琶声已经在马上急促地催办出发。如果我醉倒在沙场上请你不要见笑。自古以来远征沙场的人，又有几个能平安回家的呢。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 256,
    title: "营州歌",
    author: "高适",
    dynasty: "唐代",
    content: ["营州少年厌原野", "狐裘蒙茸猎城下", "虏酒千钟不醉人", "胡儿十岁能骑马"],
    paraphrase: "营州的少年们已经厌倦了荒凉的原野。穿着厚厚的狐皮大衣在城下狩猎。异族的烈酒几千杯也喝不醉人。这里的胡人小孩，十岁就已经能熟练地骑马奔腾了。",
    difficulty: Difficulty.HARD
  },
  {
    id: 257,
    title: "别董大",
    author: "高适",
    dynasty: "唐代",
    content: ["千里黄云白日曛", "北风吹雁雪纷纷", "莫愁前路无知己", "天下谁人不识君"],
    paraphrase: "千里的黄云遮天蔽日，日光也变得昏暗。狂烈的北风吹开了大雁，雪花纷飞。远行的朋友啊，不要愁苦前面的路上没有知音。这普天之下的人，又有谁不认识你这位大才子呢。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 258,
    title: "白雪歌送武判官归京",
    author: "岑参",
    dynasty: "唐代",
    content: ["北风卷地白草折", "胡天八月即飞雪", "忽如一夜春风来", "千树万树梨花开"],
    paraphrase: "凛冽的北风横扫大地，枯草都被折断了。胡人的天气在八月里竟然就已经漫天飞雪。就像是忽然之间吹来了一夜春风。让千万棵大树都绽放了雪白的梨花。",
    difficulty: Difficulty.HARD
  },
  {
    id: 259,
    title: "走马川行奉送出师西征",
    author: "岑参",
    dynasty: "唐代",
    content: ["君不见走马川行雪海边", "平沙莽莽黄入天", "轮台九月风夜吼", "一川碎石大如斗", "随风满地石乱走"],
    paraphrase: "难道你没看见走马川就在大雪纷飞的边塞。广袤的沙漠荒芜，黄沙漫天，与天相连。轮台的九月夜里大风在狂吼。满川的碎石竟然大得像斗一样。随着狂风在地上乱跑。",
    difficulty: Difficulty.HARD
  },
  {
    id: 260,
    title: "逢入京使",
    author: "岑参",
    dynasty: "唐代",
    content: ["故园东望路漫漫", "双袖龙钟泪不干", "马上相逢无纸笔", "凭君传语报平安"],
    paraphrase: "向东凝望着故乡的道路是那样的漫长。思乡的泪水已经弄湿了我的双袖。在马上偶然相逢，没有纸笔可以写信。只有请你帮我带句话回去，替我报个大大的平安吧。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 261,
    title: "滁州西涧",
    author: "韦应物",
    dynasty: "唐代",
    content: ["独怜幽草涧边生", "上有黄鹂深树鸣", "春潮带雨晚来急", "野渡无人舟自横"],
    paraphrase: "我只喜爱那生长在溪涧边的幽幽野草。上面传来了深深树丛中黄鹂的鸣叫。傍晚春潮带着雨水更加急促。荒野的渡口空无一人，只有小船自在地横在江心。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 262,
    title: "塞下曲·其一",
    author: "卢纶",
    dynasty: "唐代",
    content: ["鹫翎金仆姑", "燕尾绣蝥弧", "独立扬新令", "千营共一呼"],
    paraphrase: "装饰着雕羽的名贵箭支。燕尾形状的彩绘军旗。将军一人独立发布新的军令。千座军营中传开了共鸣的欢呼声。",
    difficulty: Difficulty.HARD
  },
  {
    id: 263,
    title: "塞下曲·其二",
    author: "卢纶",
    dynasty: "唐代",
    content: ["林暗草惊风", "将军夜引弓", "平明寻白羽", "没在石棱中"],
    paraphrase: "昏暗的树林中狂风乱响。将军在夜里猛地拉开了长弓。清晨天亮后去寻找那白色的羽箭。发现它竟然深深地射进了石缝之中。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 264,
    title: "塞下曲·其三",
    author: "卢纶",
    dynasty: "唐代",
    content: ["月黑雁飞高", "单于夜遁逃", "欲将轻骑逐", "大雪满弓刀"],
    paraphrase: "在漆黑的夜晚，大雁高高飞避。敌人的将领正借着夜色仓皇逃窜。我正准备带领轻骑兵去追击。漫天的大雪已经覆盖了我们的弓箭和战刀。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 265,
    title: "早春",
    author: "韩愈",
    dynasty: "唐代",
    content: ["天街小雨润如酥", "草色遥看近却无", "最是一年春好处", "绝胜烟柳满皇都"],
    paraphrase: "京城的道路上，细微的小雨润泽得像酥油一样。草色远远看去是一片新绿，走近了却反而看不到了。这是一年中春意最美好的时刻。绝对胜过那晚春时烟柳满布皇城的时候。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 266,
    title: "遣怀",
    author: "韩愈",
    dynasty: "唐代",
    content: ["夜深静卧推篷望", "淡月疏星入画屏", "不知此处归何处", "犹向南楼望五更"],
    paraphrase: "深夜里静静地躺着，推开篷窗凝望。淡雅的月光和稀疏的星辰映入了屏风。不知道这里是什么地方，又要归向哪里。我依然向着那南边的楼阁，一直凝望到了五更天亮。",
    difficulty: Difficulty.HARD
  },
  {
    id: 267,
    title: "离思其五",
    author: "元稹",
    dynasty: "唐代",
    content: ["曾经沧海难为水", "除却巫山不是云", "取次花丛懒回顾", "半缘修道半缘君"],
    paraphrase: "曾经看过了辽阔的沧海之后，别的水就再也不能称之为水了。除了巫山的云霞之外，别处的云彩也都不再是云。即使从花丛中经过，我也懒得回头看一眼。一半是因为我在修身养性，另一半是因为我心里全都是你。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 268,
    title: "江雪",
    author: "柳宗元",
    dynasty: "唐代",
    content: ["千山鸟飞绝", "万径人踪灭", "孤舟蓑笠翁", "独钓寒江雪"],
    paraphrase: "千山万岭之间再也看不见飞鸟。万条小路之上都消失了行人的足迹。在那孤独的扁舟上，坐着一个头戴斗笠、身披蓑衣的老翁。他一个人顶着满天的飞雪，在寒冷的江面上垂钓。",
    difficulty: Difficulty.EASY
  },
  {
    id: 269,
    title: "剑客",
    author: "贾岛",
    dynasty: "唐代",
    content: ["十年磨一剑", "霜刃未曾试", "今日把示君", "谁有不平事"],
    paraphrase: "花了整整十年的时间才磨好了这一把宝剑。那锋利得像寒霜一样的刃口还没有尝试过。今天我把它拿出来展示给你看。请问这普天之下，还有谁有着不平的心事呢？",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 270,
    title: "夜雨寄北",
    author: "李商隐",
    dynasty: "唐代",
    content: ["君问归期未有期", "巴山夜雨涨秋池", "何当共剪西窗烛", "却话巴山夜雨时"],
    paraphrase: "你询问我归家的日期，但我现在还无法确定。在这巴山漆黑的深更，连绵的秋雨已经把水池都填满了。什么时候我们才能在那西窗下一同修剪那跳动的灯花。再来向你细细叙说今晚这巴山夜雨时的情景呢。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 271,
    title: "锦瑟",
    author: "李商隐",
    dynasty: "唐代",
    content: ["锦瑟无端五十弦", "一弦一柱思华年", "庄生晓梦迷蝴蝶", "望帝春心托杜鹃"],
    paraphrase: "锦瑟为什么无端地就有五十根弦呢？那每一根弦、每一个音柱都在勾起我对往昔华美岁月的追思。正如庄周在早晨的梦中痴迷于蝴蝶。望帝把满心的哀怨托付给了杜鹃声。",
    difficulty: Difficulty.HARD
  },
  {
    id: 272,
    title: "无题",
    author: "李商隐",
    dynasty: "唐代",
    content: ["相见时难别亦难", "东风无力百花残", "春蚕到死丝方尽", "蜡炬成灰泪始干"],
    paraphrase: "彼此相见极其不容易，离别时则更加痛苦。春风已经渐渐没有了力气，百花都在凋零残败。春蚕直到死时，才会把腹中的丝吐尽。红蜡烛直到烧成了灰烬，这悔恨的泪滴才会流干。",
    difficulty: Difficulty.HARD
  },
  {
    id: 273,
    title: "清明",
    author: "杜牧",
    dynasty: "唐代",
    content: ["清明时节雨纷纷", "路上行人欲断魂", "借问酒家何处有", "牧童遥指杏花村"],
    paraphrase: "在清明时节里，细雨迷蒙地下个不停。那路上的行人满怀愁绪，简直快要魂断心碎了。请问哪里会有可以借宿或者喝酒的小店呢？那单纯的牧童指着遥远的一个叫作“杏花村”的地方。",
    difficulty: Difficulty.EASY
  },
  {
    id: 274,
    title: "秋夕",
    author: "杜牧",
    dynasty: "唐代",
    content: ["银烛秋光冷画屏", "轻罗小扇扑流萤", "天阶夜色凉如水", "卧看牵牛织女星"],
    paraphrase: "秋夜里，银白色的烛光洒在精美的、但有些凄冷的画屏上，我拿着小小的罗扇，在轻扑飞舞的萤火虫。那石阶上的夜色凉快得就像水一样，我静静卧着凝望天上的牵牛星和织女星。",
    difficulty: Difficulty.EASY
  },
  {
    id: 275,
    title: "泊秦淮",
    author: "杜牧",
    dynasty: "唐代",
    content: ["烟笼寒水月笼沙", "夜泊秦淮近酒家", "商女不知亡国恨", "隔江犹唱后庭花"],
    paraphrase: "迷蒙的雾气笼罩着凄冷的江水，洁净的月光笼罩着沙滩。我在这夜里停泊在秦淮河边，靠近那灯红酒绿的酒家。卖唱的女子不知道亡国的遗恨。此时还在对岸唱着那亡国之音《后庭花》。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 276,
    title: "赤壁",
    author: "杜牧",
    dynasty: "唐代",
    content: ["折戟沉沙铁未销", "自将磨洗认前朝", "东风不与周郎便", "铜雀春深锁二乔"],
    paraphrase: "折断的战戟沉没在泥沙中，铁质还没有完全锈蚀。我把它捡起来磨洗干净，认出这是前朝的遗物。如果当年的东风不给周瑜方便。恐怕大乔和小乔都已经深藏在铜雀台中，被曹操锁住了。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 277,
    title: "江南春",
    author: "杜牧",
    dynasty: "唐代",
    content: ["千里莺啼绿映红", "水村山郭酒旗风", "南朝四百八十寺", "多少楼台烟雨中"],
    paraphrase: "辽阔的江南到处莺歌燕舞，绿叶中掩映着鲜红的花朵。临水的村庄、依山的城郭，酒旗在春风中飘扬。南朝遗留下来的成百上千座寺庙。如今有多少楼台笼罩在迷蒙的烟雨之中。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 278,
    title: "寄扬州韩绰判官",
    author: "杜牧",
    dynasty: "唐代",
    content: ["青山隐隐水迢迢", "秋尽江南草未凋", "二十四桥明月夜", "玉人何处教吹箫"],
    paraphrase: "远处的青山隐约可见，江水迢迢流向远方。虽然秋天已尽，但江南的草儿还没有凋零。在那二十四桥明月照耀的夜晚。你这位玉人此时正在什么地方教人吹箫呢？",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 279,
    title: "山行",
    author: "杜牧",
    dynasty: "唐代",
    content: ["远上寒山石径斜", "白云生处有人家", "停车坐爱枫林晚", "霜叶红于二月花"],
    paraphrase: "在那高远而寒冷的山上，石间的小路弯弯曲曲，斜着向上伸展。在那白云悠然升起的地方，还有几户人家。我停下马车在这傍晚时分，是因为我太喜爱这一片片如火般绚烂的枫林。那被寒霜染红的枫叶，简直比二月的鲜花还要鲜红美丽。",
    difficulty: Difficulty.EASY
  },
  {
    id: 280,
    title: "蜂",
    author: "罗隐",
    dynasty: "唐代",
    content: ["不论平地与山尖", "无限风光尽被占", "采得百花成蜜后", "为谁辛苦为谁甜"],
    paraphrase: "不管是平坦的田野还是高耸的山尖。那一处处无限美好的自然风光都被蜜蜂们占据了。而在辛辛苦苦采摘了百花酿成甜美的蜂蜜之后。到底是在为谁辛苦，最后又是让谁尝到了甜头呢？",
    difficulty: Difficulty.EASY
  },
  {
    id: 281,
    title: "菊花",
    author: "元稹",
    dynasty: "唐代",
    content: ["秋丛绕舍似陶家", "遍绕篱边日渐斜", "不是花中偏爱菊", "此花开尽更无花"],
    paraphrase: "那一丛丛盛开的秋菊围绕着我的破旧屋舍，就像陶渊明的家里一样。我绕着篱笆欣赏，一直看到夕阳西下。并不是说在万千花朵中我对菊花有偏爱。而是在这株花谢之后，天地间就再也没有花朵可以欣赏了。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 282,
    title: "悯农其一",
    author: "李绅",
    dynasty: "唐代",
    content: ["春种一粒粟", "秋收万颗子", "四海无闲田", "农夫犹饿死"],
    paraphrase: "春天播种下一颗小小的谷物种子。到了秋天就能收获万千颗粮食。即使这天底之下没有一块空闲的良田。那辛苦的农夫们竟然还是要面临被饿死的命运。",
    difficulty: Difficulty.EASY
  },
  {
    id: 283,
    title: "悯农其二",
    author: "李绅",
    dynasty: "唐代",
    content: ["锄禾日当午", "汗滴禾下土", "谁知盘中餐", "粒粒皆辛苦"],
    paraphrase: "在正午的烈日下锄地劳作。那辛勤的汗水滴在了禾苗根部的土壤里。有谁知道在这盘子里的精美饭菜。那每一粒都是饱含着农夫们的万千辛苦啊。",
    difficulty: Difficulty.EASY
  },
  {
    id: 284,
    title: "江上渔者",
    author: "范仲淹 (宋人, 但含唐韵)",
    dynasty: "宋代",
    content: ["江上往来人", "但爱鲈鱼美", "君看一叶舟", "出没风波里"],
    paraphrase: "江面上来来往往的行人。都只喜爱那鲜嫩肥美的鲈鱼味道。请你看一看那是谁家的一叶扁舟。正惊险地出没在那汹涌的风波之中。",
    difficulty: Difficulty.EASY
  },
  {
    id: 285,
    title: "约客",
    author: "赵师秀 (宋人, 唐韵浓郁)",
    dynasty: "宋代",
    content: ["黄梅时节家家雨", "青草池塘处处蛙", "有约不来过夜半", "闲敲棋子落灯花"],
    paraphrase: "在黄梅成熟的时节里每一户人家都在经历连绵的阴雨。在那长满青草的池塘边到处都能听到青蛙的叫声。约好的朋友一直没有来，时间已经超过了半夜。我百无聊赖地敲着手中的棋子，震落了那跳动的灯花。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 286,
    title: "宿新市徐公店",
    author: "杨万里 (宋人, 含唐风)",
    dynasty: "宋代",
    content: ["篱落疏疏一径深", "树头新绿未成阴", "儿童急走追黄蝶", "飞入菜花无处寻"],
    paraphrase: "稀稀落落的篱笆墙外是一条伸向远方的小路。树顶上虽然有了新绿，但还没有形成浓密的树荫。一个孩子正急促地奔跑着追逐那黄色的蝴蝶。可惜蝴蝶飞进了那一大片灿烂的油菜花里，再也找不到了。",
    difficulty: Difficulty.EASY
  },
  {
    id: 287,
    title: "梅花",
    author: "王安石 (宋人, 含唐思)",
    dynasty: "宋代",
    content: ["墙角数枝梅", "凌寒独自开", "遥知不是雪", "为有暗香来"],
    paraphrase: "那墙角有几枝傲然的梅花。正冒着严寒在那里独自开放。从远处看去就知道那一定不是白雪。因为它正在微风中向我传来了阵阵清爽淡雅的芳香。",
    difficulty: Difficulty.EASY
  },
  {
    id: 288,
    title: "马诗其五",
    author: "李贺",
    dynasty: "唐代",
    content: ["大漠沙如雪", "燕山月似钩", "何当金络脑", "快走踏清秋"],
    paraphrase: "那辽阔的沙漠被月光照耀得就像铺了一层厚厚的白雪。那燕山上的明月就像一柄银色的钩子。什么时候才能给这匹千里马套上黄金做的口套。让它带着我在这清爽的秋天里快意地奔跑呢。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 289,
    title: "南园十三首·其五",
    author: "李贺",
    dynasty: "唐代",
    content: ["男儿何不带吴钩", "收取关山五十州", "请君暂上凌烟阁", "若个书生万户侯"],
    paraphrase: "身为男子汉为什么不带上那吴钩宝剑。去为国家收复那丢失的关山五十个州郡呢？请你暂且登上那功臣云集的凌烟阁去看一看。有哪一个书生能凭着笔墨就被封为万户侯的呢？",
    difficulty: Difficulty.HARD
  },
  {
    id: 290,
    title: "咸阳城东楼",
    author: "许浑",
    dynasty: "唐代",
    content: ["一上高楼万里愁", "蒹葭杨柳似汀洲", "溪云初起日沉阁", "山雨欲来风满楼"],
    paraphrase: "一旦登上了这高高的咸阳城楼，万里的愁思就涌上了心头。看到这岸边的芦苇和杨柳，仿佛回到了江边的汀洲。在那溪边的云气刚刚升起的时候，落日正逐渐沉入了楼阁。这就象是那山雨将要到来之前，大风已经吹满了整座城楼。",
    difficulty: Difficulty.HARD
  },
  {
    id: 291,
    title: "商山早行",
    author: "温庭筠",
    dynasty: "唐代",
    content: ["晨起动征铎", "客行悲故乡", "鸡声茅店月", "人迹板桥霜"],
    paraphrase: "清晨早早就起床出发，拉动了那象征远行的铃铛。作为一个在外的旅客，心中分外思念故乡的美好情景。在鸡叫声中，看着那照亮茅草客店的月光。在那长满寒霜的木板小桥上，留下了我的第一串足迹。",
    difficulty: Difficulty.HARD
  },
  {
    id: 292,
    title: "望驿台",
    author: "白居易",
    dynasty: "唐代",
    content: ["两度朱雀桥", "三过乌衣巷", "今日更登楼", "不知几惆怅"],
    paraphrase: "两次经过那繁华的朱雀桥。三次走过那深邃的乌衣巷。今天我又重新登上了这座驿台。不知道内心会有多么大的思古之情和无尽的惆怅啊。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 293,
    title: "陇西行",
    author: "陈陶",
    dynasty: "唐代",
    content: ["誓扫匈奴不顾身", "五千貂锦丧胡尘", "可怜无定河边骨", "犹是春闺梦里人"],
    paraphrase: "誓死要把敌人扫除净尽而不顾自己的性命。五千名穿着名贵衣衫的身躯就这样埋没在了异乡的尘土之中。最惹人怜爱的是那无定河边的一堆白骨。其实在远方的家乡里，他依然是自己心爱的人在那春夜梦里时刻思念的对象啊。",
    difficulty: Difficulty.HARD
  },
  {
    id: 294,
    title: "秋夜将晓出篱门迎凉有感",
    author: "陆游 (宋人, 含唐情)",
    dynasty: "宋代",
    content: ["三万里河东入海", "五千仞岳上摩天", "遗民泪尽胡尘里", "南望王师又一年"],
    paraphrase: "辽阔的三万里黄河奔腾咆哮着流向东方的海洋。高不可攀的五千仞华山直插云霄，顶天立地。那些流落在故土的百姓们在那敌人的尘土里眼泪都要流干了。他们向着南边张望着那大唐王师啊，等了一年又一年。",
    difficulty: Difficulty.HARD
  },
  {
    id: 295,
    title: "夏意",
    author: "苏舜钦 (宋人, 含唐境)",
    dynasty: "宋代",
    content: ["别院深深夏席清", "石榴开遍透帘明", "树阴满地日当午", "梦觉流莺时一声"],
    paraphrase: "在深邃的别院里，夏天的凉席显得格外的清凉舒爽。那火红的石榴花开得漫山遍野，映射在帘帐上也显得一片明亮。在那日当正午的时刻，浓密的树阴铺满了地面。我在梦中醒来，偶尔还听到林中流莺传来一两声清脆的啼叫。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 296,
    title: "春日",
    author: "朱熹 (宋人, 含唐理)",
    dynasty: "宋代",
    content: ["胜日寻芳泗水滨", "无边光景一时新", "等闲识得东风面", "万紫千红总是春"],
    paraphrase: "在一个阳光明媚的日子里，我来到泗水河畔寻找那春天的芳踪。辽阔无边的光景顿时之间焕然一新，充满生机。随随便便就能认出那温暖的东风的真面目。那盛开的万紫千红的花朵啊，其实全都是春天带来的功劳啊。",
    difficulty: Difficulty.EASY
  },
  {
    id: 297,
    title: "晚春",
    author: "韩愈",
    dynasty: "唐代",
    content: ["草树知春不久归", "百般红紫斗芳菲", "杨花榆荚无才思", "惟解漫天作雪飞"],
    paraphrase: "花草树木都知道春天很快就要回去了。于是大家都千方百计地争艳斗丽，想留住春天的尾声。即使像那没有多少才情思虑的杨花和榆荚。也懂得挥洒那漫天的白花，假装像雪花一样在那里飞舞。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 298,
    title: "杂下",
    author: "王维",
    dynasty: "唐代",
    content: ["家住孟津河", "门前柳色多", "寄语采桑者", "相携一径过"],
    paraphrase: "我家就住在孟津河的岸边。大门前长满了浓密的柳树。请帮我给那些正在采桑的女子们带句话。请她们携手一起在这条开满鲜花的小路上经过吧。",
    difficulty: Difficulty.EASY
  },
  {
    id: 299,
    title: "送杜少府之任蜀州",
    author: "王勃",
    dynasty: "唐代",
    content: ["城阙辅三秦", "风烟望五津", "与君离别意", "同是宦游人", "海内存知己", "天涯若比邻"],
    paraphrase: "雄伟的京城由三秦大地护卫着。风云迷蒙中我们凝望着那远方的五处渡口。之所以对你的分别充满如此不舍的深情。是因为我们同样都是在那仕途中奔波的游子。只要这四海之内还存有知心的朋友。即使远在天涯，也感觉像是那近在咫尺的邻居一样亲近。",
    difficulty: Difficulty.MEDIUM
  },
  {
    id: 300,
    title: "江畔独步寻花其五",
    author: "杜甫",
    dynasty: "唐代",
    content: ["黄师塔前江水东", "春光懒困倚微风", "桃花一簇开无主", "可爱深红爱浅红"],
    paraphrase: "黄师塔前的江水向东流去，春光中我感到些许倦意。在那茂盛的桃花树下，深红浅红的花朵争奇斗艳，真是让人爱不释手。",
    difficulty: Difficulty.MEDIUM
  },
];

export const POEMS_DATA: Poem[] = [...RAW_POEMS_DATA].sort((a, b) => {
  const order: Record<Difficulty, number> = {
    [Difficulty.EASY]: 0,
    [Difficulty.MEDIUM]: 1,
    [Difficulty.HARD]: 2
  };
  if (order[a.difficulty] !== order[b.difficulty]) {
    return order[a.difficulty] - order[b.difficulty];
  }
  return a.id - b.id; // Keep original relative order within same difficulty
}).map((p, i) => ({
  ...p,
  id: i + 1
}));

export const COMMON_HANZI = [
  "一", "乙", "二", "十", "丁", "厂", "七", "卜", "人", "入", "八", "九", "几", "儿", "了", "力", "乃", "刀", "又", "三", "于", "干", "亏", "士", "工", "土", "才", "寸", "下", "大", "丈", "与", "万", "上", "小", "口", "巾", "山", "千", "乞", "川", "亿", "个", "勺", "久", "凡", "及", "夕", "丸", "么", "义", "之", "尸", "已", "巳", "弓", "己", "卫", "子", "也", "女", "飞", "刃", "习", "叉", "马", "乡", "丰", "王", "井", "开", "夫", "天", "无", "元", "专", "云", "扎", "艺", "木", "五", "支", "厅", "不", "太", "犬", "区", "历", "尤", "友", "匹", "车", "巨", "牙", "屯", "比", "互", "切", "瓦", "止", "少", "日", "中", "冈", "贝", "内", "水", "见", "午", "牛", "手", "毛", "气", "升", "长", "仁", "什", "片", "仆", "化", "仇", "币", "仍", "仅", "斤", "爪", "反", "介", "父", "从", "今", "凶", "分", "乏", "公", "仓", "月", "氏", "勿", "欠", "风", "丹", "匀", "乌", "凤", "勾", "文", "六", "方", "火", "为", "斗", "忆", "订", "计", "户", "认", "心", "尺", "引", "丑", "巴", "孔", "队", "办", "以", "允", "予", "劝", "双", "书", "幻", "玉", "刊", "示", "末", "未", "击", "打", "巧", "正", "扑", "扒", "功", "扔", "去", "甘", "世", "古", "节", "本", "术", "可", "丙", "左", "厉", "右", "石", "布", "龙", "平", "灭", "轧", "东", "卡", "北", "占", "业", "旧", "帅", "归", "且", "旦", "目", "叶", "甲", "申", "叮", "电", "号", "田", "由", "史", "只", "央", "兄", "叼", "叫", "另", "叨", "叹", "四", "生", "失", "禾", "丘", "付", "仗", "代", "仙", "们", "仪", "白", "仔", "他", "斥", "瓜", "乎", "丛", "令", "用", "甩", "印", "尔", "乐", "句", "匆", "册", "犯", "外", "处", "冬", "鸟", "务", "包", "饥", "主", "市", "立", "闪", "兰", "半", "汁", "汇", "头", "汉", "宁", "穴", "它", "讨", "写", "让", "礼", "训", "必", "议", "讯", "记", "永", "司", "尼", "民", "出", "辽", "奶", "奴", "加", "召", "皮", "边", "发", "孕", "圣", "对", "台", "矛", "纠", "母", "幼", "丝", "式", "刑", "动", "扛", "寺", "吉", "扣", "考", "托", "老", "执", "巩", "圾", "扩", "扫", "地", "扬", "场", "耳", "共", "芒", "亚", "芝"
];

export const LEVEL_RULES = [
  { min: 0, max: 99, level: UserLevel.TONG_SHENG },
  { min: 100, max: 299, level: UserLevel.XIU_CAI },
  { min: 300, max: 599, level: UserLevel.JU_REN },
  { min: 600, max: 899, level: UserLevel.JIN_SHI },
  { min: 900, max: Infinity, level: UserLevel.ZHUANG_YUAN }
];
