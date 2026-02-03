// アイドルグループとメンバーのデータ

export interface Member {
    id: string;
    name: string;
    nameKana: string; // ふりがな
    nameEn: string; // 英語名
    generation: string;
    groupId: string;
    birthday?: string; // MM-DD形式（例: "01-15" = 1月15日）
}

export interface Group {
    id: string;
    name: string;
    slug: string;
    color: string;
    icon: string;
    members: Member[];
}

// グループデータ
export const groups: Group[] = [
    {
        id: "nogizaka46",
        name: "乃木坂46",
        slug: "nogizaka46",
        color: "#9B59B6",
        icon: "/groups/nogizaka46.png",
        members: [
            // 3期生
            { id: "n-ito-riria", name: "伊藤理々杏", nameKana: "いとう りりあ", nameEn: "Riria Ito", generation: "3期生", groupId: "nogizaka46", birthday: "10-08" },
            { id: "n-iwamoto-renka", name: "岩本蓮加", nameKana: "いわもと れんか", nameEn: "Renka Iwamoto", generation: "3期生", groupId: "nogizaka46", birthday: "02-02" },
            { id: "n-umezawa-minami", name: "梅澤美波", nameKana: "うめざわ みなみ", nameEn: "Minami Umezawa", generation: "3期生", groupId: "nogizaka46", birthday: "01-06" },
            { id: "n-yoshida-ayano", name: "吉田綾乃クリスティー", nameKana: "よしだ あやのくりすてぃー", nameEn: "Ayano Christie Yoshida", generation: "3期生", groupId: "nogizaka46", birthday: "09-06" },
            // 4期生
            { id: "n-endo-sakura", name: "遠藤さくら", nameKana: "えんどう さくら", nameEn: "Sakura Endo", generation: "4期生", groupId: "nogizaka46", birthday: "10-03" },
            { id: "n-kaki-haruka", name: "賀喜遥香", nameKana: "かき はるか", nameEn: "Haruka Kaki", generation: "4期生", groupId: "nogizaka46", birthday: "08-08" },
            { id: "n-kanagawa-saya", name: "金川紗耶", nameKana: "かながわ さや", nameEn: "Saya Kanagawa", generation: "4期生", groupId: "nogizaka46", birthday: "10-31" },
            { id: "n-kuromi-haruka", name: "黒見明香", nameKana: "くろみ はるか", nameEn: "Haruka Kuromi", generation: "4期生", groupId: "nogizaka46", birthday: "01-19" },
            { id: "n-sato-rika", name: "佐藤璃果", nameKana: "さとう りか", nameEn: "Rika Sato", generation: "4期生", groupId: "nogizaka46", birthday: "08-09" },
            { id: "n-shibata-yuna", name: "柴田柚菜", nameKana: "しばた ゆな", nameEn: "Yuna Shibata", generation: "4期生", groupId: "nogizaka46", birthday: "01-02" },
            { id: "n-tamura-mayu", name: "田村真佑", nameKana: "たむら まゆ", nameEn: "Mayu Tamura", generation: "4期生", groupId: "nogizaka46", birthday: "01-12" },
            { id: "n-tsutsui-ayame", name: "筒井あやめ", nameKana: "つつい あやめ", nameEn: "Ayame Tsutsui", generation: "4期生", groupId: "nogizaka46", birthday: "06-08" },
            { id: "n-hayashi-runa", name: "林瑠奈", nameKana: "はやし るな", nameEn: "Runa Hayashi", generation: "4期生", groupId: "nogizaka46", birthday: "10-02" },
            { id: "n-yumiki-nao", name: "弓木奈於", nameKana: "ゆみき なお", nameEn: "Nao Yumiki", generation: "4期生", groupId: "nogizaka46", birthday: "01-03" },
            // 5期生
            { id: "n-ioki-mao", name: "五百城茉央", nameKana: "いおき まお", nameEn: "Mao Ioki", generation: "5期生", groupId: "nogizaka46", birthday: "01-28" },
            { id: "n-ikeda-teresa", name: "池田瑛紗", nameKana: "いけだ てれさ", nameEn: "Teresa Ikeda", generation: "5期生", groupId: "nogizaka46", birthday: "05-12" },
            { id: "n-ichinose-miku", name: "一ノ瀬美空", nameKana: "いちのせ みく", nameEn: "Miku Ichinose", generation: "5期生", groupId: "nogizaka46", birthday: "03-19" },
            { id: "n-inoue-nagi", name: "井上和", nameKana: "いのうえ なぎ", nameEn: "Nagi Inoue", generation: "5期生", groupId: "nogizaka46", birthday: "03-23" },
            { id: "n-okamoto-hina", name: "岡本姫奈", nameKana: "おかもと ひな", nameEn: "Hina Okamoto", generation: "5期生", groupId: "nogizaka46", birthday: "08-11" },
            { id: "n-ogawa-aya", name: "小川彩", nameKana: "おがわ あや", nameEn: "Aya Ogawa", generation: "5期生", groupId: "nogizaka46", birthday: "06-27" },
            { id: "n-okuda-iroha", name: "奥田いろは", nameKana: "おくだ いろは", nameEn: "Iroha Okuda", generation: "5期生", groupId: "nogizaka46", birthday: "04-10" },
            { id: "n-kawasaki-sakura", name: "川﨑桜", nameKana: "かわさき さくら", nameEn: "Sakura Kawasaki", generation: "5期生", groupId: "nogizaka46", birthday: "04-17" },
            { id: "n-sugawara-satsuki", name: "菅原咲月", nameKana: "すがわら さつき", nameEn: "Satsuki Sugawara", generation: "5期生", groupId: "nogizaka46", birthday: "10-19" },
            { id: "n-tomisato-nao", name: "冨里奈央", nameKana: "とみさと なお", nameEn: "Nao Tomisato", generation: "5期生", groupId: "nogizaka46", birthday: "12-22" },
            { id: "n-nakanishi-aruno", name: "中西アルノ", nameKana: "なかにし あるの", nameEn: "Aruno Nakanishi", generation: "5期生", groupId: "nogizaka46", birthday: "02-13" },
            // 6期生
            { id: "n-atago-kokone", name: "愛宕心響", nameKana: "あたご ここね", nameEn: "Kokone Atago", generation: "6期生", groupId: "nogizaka46" },
            { id: "n-okoshi-hinano", name: "大越ひなの", nameKana: "おおこし ひなの", nameEn: "Hinano Okoshi", generation: "6期生", groupId: "nogizaka46" },
            { id: "n-ozu-reina", name: "小津玲奈", nameKana: "おづ れいな", nameEn: "Reina Ozu", generation: "6期生", groupId: "nogizaka46" },
            { id: "n-kaibe-akari", name: "海邉朱莉", nameKana: "かいべ あかり", nameEn: "Akari Kaibe", generation: "6期生", groupId: "nogizaka46" },
            { id: "n-kawabata-hina", name: "川端晃菜", nameKana: "かわばた ひな", nameEn: "Hina Kawabata", generation: "6期生", groupId: "nogizaka46" },
            { id: "n-suzuki-yuuna", name: "鈴木佑捺", nameKana: "すずき ゆうな", nameEn: "Yuuna Suzuki", generation: "6期生", groupId: "nogizaka46" },
            { id: "n-setoguchi-mitsuki", name: "瀬戸口心月", nameKana: "せとぐち みつき", nameEn: "Mitsuki Setoguchi", generation: "6期生", groupId: "nogizaka46" },
            { id: "n-nagashima-rio", name: "長嶋凛桜", nameKana: "ながしま りお", nameEn: "Rio Nagashima", generation: "6期生", groupId: "nogizaka46" },
            { id: "n-masuda-mirine", name: "増田三莉音", nameKana: "ますだ みりね", nameEn: "Mirine Masuda", generation: "6期生", groupId: "nogizaka46" },
            { id: "n-morihira-urumi", name: "森平麗心", nameKana: "もりひら うるみ", nameEn: "Urumi Morihira", generation: "6期生", groupId: "nogizaka46" },
            { id: "n-yada-moeka", name: "矢田萌華", nameKana: "やだ もえか", nameEn: "Moeka Yada", generation: "6期生", groupId: "nogizaka46" },
        ],
    },
    {
        id: "sakurazaka46",
        name: "櫻坂46",
        slug: "sakurazaka46",
        color: "#E91E63",
        icon: "/groups/sakurazaka46.png",
        members: [
            // 2期生
            { id: "s-endo-hikari", name: "遠藤光莉", nameKana: "えんどう ひかり", nameEn: "Hikari Endo", generation: "2期生", groupId: "sakurazaka46", birthday: "04-17" },
            { id: "s-ozono-rei", name: "大園玲", nameKana: "おおぞの れい", nameEn: "Rei Ozono", generation: "2期生", groupId: "sakurazaka46", birthday: "04-18" },
            { id: "s-onuma-akiho", name: "大沼晶保", nameKana: "おおぬま あきほ", nameEn: "Akiho Onuma", generation: "2期生", groupId: "sakurazaka46", birthday: "10-12" },
            { id: "s-kosaka-marino", name: "幸阪茉里乃", nameKana: "こうさか まりの", nameEn: "Marino Kosaka", generation: "2期生", groupId: "sakurazaka46", birthday: "12-19" },
            { id: "s-takemoto-yui", name: "武元唯衣", nameKana: "たけもと ゆい", nameEn: "Yui Takemoto", generation: "2期生", groupId: "sakurazaka46", birthday: "03-23" },
            { id: "s-tamura-hono", name: "田村保乃", nameKana: "たむら ほの", nameEn: "Hono Tamura", generation: "2期生", groupId: "sakurazaka46", birthday: "10-21" },
            { id: "s-fujiyoshi-karin", name: "藤吉夏鈴", nameKana: "ふじよし かりん", nameEn: "Karin Fujiyoshi", generation: "2期生", groupId: "sakurazaka46", birthday: "08-29" },
            { id: "s-masumoto-kira", name: "増本綺良", nameKana: "ますもと きら", nameEn: "Kira Masumoto", generation: "2期生", groupId: "sakurazaka46", birthday: "01-12" },
            { id: "s-matsuda-rina", name: "松田里奈", nameKana: "まつだ りな", nameEn: "Rina Matsuda", generation: "2期生", groupId: "sakurazaka46", birthday: "01-30" },
            { id: "s-morita-hikaru", name: "森田ひかる", nameKana: "もりた ひかる", nameEn: "Hikaru Morita", generation: "2期生", groupId: "sakurazaka46", birthday: "07-10" },
            { id: "s-moriya-rena", name: "守屋麗奈", nameKana: "もりや れな", nameEn: "Rena Moriya", generation: "2期生", groupId: "sakurazaka46", birthday: "01-02" },
            { id: "s-yamasaki-ten", name: "山﨑天", nameKana: "やまさき てん", nameEn: "Ten Yamasaki", generation: "2期生", groupId: "sakurazaka46", birthday: "09-28" },
            // 3期生
            { id: "s-ishimori-rika", name: "石森璃花", nameKana: "いしもり りか", nameEn: "Rika Ishimori", generation: "3期生", groupId: "sakurazaka46", birthday: "01-13" },
            { id: "s-endo-riko", name: "遠藤理子", nameKana: "えんどう りこ", nameEn: "Riko Endo", generation: "3期生", groupId: "sakurazaka46", birthday: "02-02" },
            { id: "s-odakura-reina", name: "小田倉麗奈", nameKana: "おだくら れいな", nameEn: "Reina Odakura", generation: "3期生", groupId: "sakurazaka46", birthday: "10-25" },
            { id: "s-kojima-nagisa", name: "小島凪紗", nameKana: "こじま なぎさ", nameEn: "Nagisa Kojima", generation: "3期生", groupId: "sakurazaka46", birthday: "03-16" },
            { id: "s-nakashima-yuzuki", name: "中嶋優月", nameKana: "なかしま ゆづき", nameEn: "Yuzuki Nakashima", generation: "3期生", groupId: "sakurazaka46", birthday: "11-08" },
            { id: "s-nakagawa-chihiro", name: "中川智尋", nameKana: "なかがわ ちひろ", nameEn: "Chihiro Nakagawa", generation: "3期生", groupId: "sakurazaka46", birthday: "09-22" },
            { id: "s-taniguchi-airi", name: "谷口愛季", nameKana: "たにぐち あいり", nameEn: "Airi Taniguchi", generation: "3期生", groupId: "sakurazaka46", birthday: "12-13" },
            { id: "s-matono-mio", name: "的野美青", nameKana: "まとの みお", nameEn: "Mio Matono", generation: "3期生", groupId: "sakurazaka46", birthday: "01-21" },
            { id: "s-murai-yu", name: "村井優", nameKana: "むらい ゆう", nameEn: "Yu Murai", generation: "3期生", groupId: "sakurazaka46", birthday: "11-24" },
            { id: "s-murayama-miu", name: "村山美羽", nameKana: "むらやま みう", nameEn: "Miu Murayama", generation: "3期生", groupId: "sakurazaka46", birthday: "04-12" },
            { id: "s-yamashita-shizuki", name: "山下瞳月", nameKana: "やました しづき", nameEn: "Shizuki Yamashita", generation: "3期生", groupId: "sakurazaka46", birthday: "01-10" },
            // 4期生
            { id: "s-asai-konomi", name: "浅井恋乃未", nameKana: "あさい このみ", nameEn: "Konomi Asai", generation: "4期生", groupId: "sakurazaka46" },
            { id: "s-inaguma-hina", name: "稲熊ひな", nameKana: "いなぐま ひな", nameEn: "Hina Inaguma", generation: "4期生", groupId: "sakurazaka46" },
            { id: "s-katsumata-haru", name: "勝又春", nameKana: "かつまた はる", nameEn: "Haru Katsumata", generation: "4期生", groupId: "sakurazaka46" },
            { id: "s-sato-neo", name: "佐藤愛桜", nameKana: "さとう ねお", nameEn: "Neo Sato", generation: "4期生", groupId: "sakurazaka46" },
            { id: "s-matsumoto-wako", name: "松本和子", nameKana: "まつもと わこ", nameEn: "Wako Matsumoto", generation: "4期生", groupId: "sakurazaka46" },
            { id: "s-meguro-hiiro", name: "目黒陽色", nameKana: "めぐろ ひいろ", nameEn: "Hiiro Meguro", generation: "4期生", groupId: "sakurazaka46" },
            { id: "s-mukai-itoha", name: "向井純葉", nameKana: "むかい いとは", nameEn: "Itoha Mukai", generation: "4期生", groupId: "sakurazaka46" },
            { id: "s-yamakawa-ui", name: "山川宇衣", nameKana: "やまかわ うい", nameEn: "Ui Yamakawa", generation: "4期生", groupId: "sakurazaka46" },
            { id: "s-yamada-momomi", name: "山田桃実", nameKana: "やまだ ももみ", nameEn: "Momomi Yamada", generation: "4期生", groupId: "sakurazaka46" },
        ],
    },
    {
        id: "hinatazaka46",
        name: "日向坂46",
        slug: "hinatazaka46",
        color: "#03A9F4",
        icon: "/groups/hinatazaka46.png",
        members: [
            // 2期生
            { id: "h-kanemura-miku", name: "金村美玖", nameKana: "かねむら みく", nameEn: "Miku Kanemura", generation: "2期生", groupId: "hinatazaka46", birthday: "09-10" },
            { id: "h-kosaka-nao", name: "小坂菜緒", nameKana: "こさか なお", nameEn: "Nao Kosaka", generation: "2期生", groupId: "hinatazaka46", birthday: "09-07" },
            // 3期生
            { id: "h-kamimura-hinano", name: "上村ひなの", nameKana: "かみむら ひなの", nameEn: "Hinano Kamimura", generation: "3期生", groupId: "hinatazaka46", birthday: "04-12" },
            { id: "h-takahashi-mikuni", name: "髙橋未来虹", nameKana: "たかはし みくに", nameEn: "Mikuni Takahashi", generation: "3期生", groupId: "hinatazaka46", birthday: "09-02" },
            { id: "h-morimoto-mari", name: "森本茉莉", nameKana: "もりもと まり", nameEn: "Mari Morimoto", generation: "3期生", groupId: "hinatazaka46", birthday: "02-22" },
            { id: "h-yamaguchi-haruyo", name: "山口陽世", nameKana: "やまぐち はるよ", nameEn: "Haruyo Yamaguchi", generation: "3期生", groupId: "hinatazaka46", birthday: "02-23" },
            // 4期生
            { id: "h-ishizuka-tamaki", name: "石塚瑶季", nameKana: "いしづか たまき", nameEn: "Tamaki Ishizuka", generation: "4期生", groupId: "hinatazaka46", birthday: "07-08" },
            { id: "h-konishi-nanami", name: "小西夏菜実", nameKana: "こにし ななみ", nameEn: "Nanami Konishi", generation: "4期生", groupId: "hinatazaka46", birthday: "05-09" },
            { id: "h-shimizu-rio", name: "清水理央", nameKana: "しみず りお", nameEn: "Rio Shimizu", generation: "4期生", groupId: "hinatazaka46", birthday: "10-21" },
            { id: "h-shogenji-yoko", name: "正源司陽子", nameKana: "しょうげんじ ようこ", nameEn: "Yoko Shogenji", generation: "4期生", groupId: "hinatazaka46", birthday: "01-09" },
            { id: "h-takeuchi-kirari", name: "竹内希来里", nameKana: "たけうち きらり", nameEn: "Kirari Takeuchi", generation: "4期生", groupId: "hinatazaka46", birthday: "08-23" },
            { id: "h-hirao-honoka", name: "平尾帆夏", nameKana: "ひらお ほのか", nameEn: "Honoka Hirao", generation: "4期生", groupId: "hinatazaka46", birthday: "08-30" },
            { id: "h-hiraoka-mitsuki", name: "平岡海月", nameKana: "ひらおか みつき", nameEn: "Mitsuki Hiraoka", generation: "4期生", groupId: "hinatazaka46", birthday: "12-20" },
            { id: "h-fujishima-kaho", name: "藤嶌果歩", nameKana: "ふじしま かほ", nameEn: "Kaho Fujishima", generation: "4期生", groupId: "hinatazaka46", birthday: "02-01" },
            { id: "h-miyachi-sumire", name: "宮地すみれ", nameKana: "みやち すみれ", nameEn: "Sumire Miyachi", generation: "4期生", groupId: "hinatazaka46", birthday: "02-12" },
            { id: "h-yamashita-haruka", name: "山下葉留花", nameKana: "やました はるか", nameEn: "Haruka Yamashita", generation: "4期生", groupId: "hinatazaka46", birthday: "05-04" },
            { id: "h-watanabe-rina", name: "渡辺莉奈", nameKana: "わたなべ りな", nameEn: "Rina Watanabe", generation: "4期生", groupId: "hinatazaka46", birthday: "07-19" },
            // 5期生
            { id: "h-ota-mizuki", name: "大田美月", nameKana: "おおた みずき", nameEn: "Mizuki Ota", generation: "5期生", groupId: "hinatazaka46" },
            { id: "h-ono-manami", name: "大野愛実", nameKana: "おおの まなみ", nameEn: "Manami Ono", generation: "5期生", groupId: "hinatazaka46" },
            { id: "h-katayama-saki", name: "片山紗希", nameKana: "かたやま さき", nameEn: "Saki Katayama", generation: "5期生", groupId: "hinatazaka46" },
            { id: "h-kuramori-hinano", name: "蔵盛妃那乃", nameKana: "くらもり ひなの", nameEn: "Hinano Kuramori", generation: "5期生", groupId: "hinatazaka46" },
            { id: "h-sakai-niina", name: "坂井新奈", nameKana: "さかい にいな", nameEn: "Niina Sakai", generation: "5期生", groupId: "hinatazaka46" },
            { id: "h-sato-yu", name: "佐藤優羽", nameKana: "さとう ゆうは", nameEn: "Yuha Sato", generation: "5期生", groupId: "hinatazaka46" },
            { id: "h-shimoda-izuki", name: "下田衣珠季", nameKana: "しもだ いずき", nameEn: "Izuki Shimoda", generation: "5期生", groupId: "hinatazaka46" },
            { id: "h-takai-rika", name: "高井俐香", nameKana: "たかい りか", nameEn: "Rika Takai", generation: "5期生", groupId: "hinatazaka46" },
            { id: "h-tsurusaki-niko", name: "鶴崎仁香", nameKana: "つるさき にこ", nameEn: "Niko Tsurusaki", generation: "5期生", groupId: "hinatazaka46" },
            { id: "h-matsuo-sakura", name: "松尾桜", nameKana: "まつお さくら", nameEn: "Sakura Matsuo", generation: "5期生", groupId: "hinatazaka46" },
        ],
    },
    {
        id: "snowman",
        name: "Snow Man",
        slug: "snowman",
        color: "#00BCD4",
        icon: "/groups/snowman.png",
        members: [
            { id: "sm-iwamoto-hikaru", name: "岩本照", nameKana: "いわもと ひかる", nameEn: "Hikaru Iwamoto", generation: "", groupId: "snowman", birthday: "05-17" },
            { id: "sm-fukazawa-tatsuya", name: "深澤辰哉", nameKana: "ふかざわ たつや", nameEn: "Tatsuya Fukazawa", generation: "", groupId: "snowman", birthday: "05-05" },
            { id: "sm-raul", name: "ラウール", nameKana: "らうーる", nameEn: "Raul", generation: "", groupId: "snowman", birthday: "06-27" },
            { id: "sm-watanabe-shota", name: "渡辺翔太", nameKana: "わたなべ しょうた", nameEn: "Shota Watanabe", generation: "", groupId: "snowman", birthday: "11-05" },
            { id: "sm-mukai-koji", name: "向井康二", nameKana: "むかい こうじ", nameEn: "Koji Mukai", generation: "", groupId: "snowman", birthday: "06-21" },
            { id: "sm-abe-ryohei", name: "阿部亮平", nameKana: "あべ りょうへい", nameEn: "Ryohei Abe", generation: "", groupId: "snowman", birthday: "11-27" },
            { id: "sm-meguro-ren", name: "目黒蓮", nameKana: "めぐろ れん", nameEn: "Ren Meguro", generation: "", groupId: "snowman", birthday: "02-16" },
            { id: "sm-miyadate-ryota", name: "宮舘涼太", nameKana: "みやだて りょうた", nameEn: "Ryota Miyadate", generation: "", groupId: "snowman", birthday: "03-25" },
            { id: "sm-sakuma-daisuke", name: "佐久間大介", nameKana: "さくま だいすけ", nameEn: "Daisuke Sakuma", generation: "", groupId: "snowman", birthday: "07-05" },
        ],
    },
    {
        id: "sixtones",
        name: "SixTONES",
        slug: "sixtones",
        color: "#B71C1C",
        icon: "/groups/sixtones.png",
        members: [
            { id: "st-jesse", name: "ジェシー", nameKana: "じぇしー", nameEn: "Jesse", generation: "", groupId: "sixtones", birthday: "06-11" },
            { id: "st-kyomoto-taiga", name: "京本大我", nameKana: "きょうもと たいが", nameEn: "Taiga Kyomoto", generation: "", groupId: "sixtones", birthday: "12-03" },
            { id: "st-matsumura-hokuto", name: "松村北斗", nameKana: "まつむら ほくと", nameEn: "Hokuto Matsumura", generation: "", groupId: "sixtones", birthday: "06-18" },
            { id: "st-kouchi-yugo", name: "髙地優吾", nameKana: "こうち ゆうご", nameEn: "Yugo Kouchi", generation: "", groupId: "sixtones", birthday: "03-08" },
            { id: "st-morimoto-shintaro", name: "森本慎太郎", nameKana: "もりもと しんたろう", nameEn: "Shintaro Morimoto", generation: "", groupId: "sixtones", birthday: "07-15" },
            { id: "st-tanaka-juri", name: "田中樹", nameKana: "たなか じゅり", nameEn: "Juri Tanaka", generation: "", groupId: "sixtones", birthday: "06-15" },
        ],
    },
    // AKB48グループ
    {
        id: "akb48",
        name: "AKB48",
        slug: "akb48",
        color: "#E91E63",
        icon: "/groups/akb48.png",
        members: [
            // 13期生
            { id: "akb-iwatate-saho", name: "岩立沙穂", nameKana: "いわたて さほ", nameEn: "Saho Iwatate", generation: "13期生", groupId: "akb48" },
            // 15期生
            { id: "akb-fukuoka-seina", name: "福岡聖菜", nameKana: "ふくおか せいな", nameEn: "Seina Fukuoka", generation: "15期生", groupId: "akb48" },
            { id: "akb-mukaichi-mion", name: "向井地美音", nameKana: "むかいち みおん", nameEn: "Mion Mukaichi", generation: "15期生", groupId: "akb48" },
            // Team8
            { id: "akb-oguri-yui", name: "小栗有以", nameKana: "おぐり ゆい", nameEn: "Yui Oguri", generation: "Team8", groupId: "akb48" },
            { id: "akb-kuranoo-narumi", name: "倉野尾成美", nameKana: "くらのお なるみ", nameEn: "Narumi Kuranoo", generation: "総監督", groupId: "akb48" },
            { id: "akb-sakagawa-hiyuka", name: "坂川陽香", nameKana: "さかがわ ひゆか", nameEn: "Hiyuka Sakagawa", generation: "Team8", groupId: "akb48" },
            { id: "akb-shitao-miu", name: "下尾みう", nameKana: "したお みう", nameEn: "Miu Shitao", generation: "Team8", groupId: "akb48" },
            { id: "akb-takahashi-ayane", name: "髙橋彩音", nameKana: "たかはし あやね", nameEn: "Ayane Takahashi", generation: "Team8", groupId: "akb48" },
            { id: "akb-tokunaga-remi", name: "徳永羚海", nameKana: "とくなが れみ", nameEn: "Remi Tokunaga", generation: "Team8", groupId: "akb48" },
            { id: "akb-nagano-serika", name: "永野芹佳", nameKana: "ながの せりか", nameEn: "Serika Nagano", generation: "Team8", groupId: "akb48" },
            { id: "akb-hashimoto-haruna", name: "橋本陽菜", nameKana: "はしもと はるな", nameEn: "Haruna Hashimoto", generation: "Team8", groupId: "akb48" },
            // ドラフト2期生
            { id: "akb-chiba-eri", name: "千葉恵里", nameKana: "ちば えりい", nameEn: "Erii Chiba", generation: "ドラフト2期生", groupId: "akb48" },
            // 16期生
            { id: "akb-suzuki-kurumi", name: "鈴木くるみ", nameKana: "すずき くるみ", nameEn: "Kurumi Suzuki", generation: "16期生", groupId: "akb48" },
            { id: "akb-taguchi-manaka", name: "田口愛佳", nameKana: "たぐち まなか", nameEn: "Manaka Taguchi", generation: "16期生", groupId: "akb48" },
            { id: "akb-nagatomo-ayami", name: "長友彩海", nameKana: "ながとも あやみ", nameEn: "Ayami Nagatomo", generation: "16期生", groupId: "akb48" },
            { id: "akb-muto-orin", name: "武藤小麟", nameKana: "むとう おりん", nameEn: "Orin Muto", generation: "16期生", groupId: "akb48" },
            { id: "akb-yamauchi-mizuki", name: "山内瑞葵", nameKana: "やまうち みずき", nameEn: "Mizuki Yamauchi", generation: "16期生", groupId: "akb48" },
            // ドラフト3期生
            { id: "akb-omori-maho", name: "大盛真歩", nameKana: "おおもり まほ", nameEn: "Maho Omori", generation: "ドラフト3期生", groupId: "akb48" },
            // 17期生
            { id: "akb-ota-yuki", name: "太田有紀", nameKana: "おおた ゆき", nameEn: "Yuki Ota", generation: "17期生", groupId: "akb48" },
            { id: "akb-sato-airi", name: "佐藤綺星", nameKana: "さとう あいり", nameEn: "Airi Sato", generation: "17期生", groupId: "akb48" },
            { id: "akb-hashimoto-eriko", name: "橋本恵理子", nameKana: "はしもと えりこ", nameEn: "Eriko Hashimoto", generation: "17期生", groupId: "akb48" },
            { id: "akb-hatakeyama-nozomi", name: "畠山希美", nameKana: "はたけやま のぞみ", nameEn: "Nozomi Hatakeyama", generation: "17期生", groupId: "akb48" },
            { id: "akb-hirata-yuki", name: "平田侑希", nameKana: "ひらた ゆき", nameEn: "Yuki Hirata", generation: "17期生", groupId: "akb48" },
            { id: "akb-hotei-moka", name: "布袋百椛", nameKana: "ほてい もか", nameEn: "Moka Hotei", generation: "17期生", groupId: "akb48" },
            { id: "akb-mashii-mayuu", name: "正鋳真優", nameKana: "ましい まゆう", nameEn: "Mayuu Mashii", generation: "17期生", groupId: "akb48" },
            { id: "akb-mizushima-miyuu", name: "水島美結", nameKana: "みずしま みゆう", nameEn: "Miyuu Mizushima", generation: "17期生", groupId: "akb48" },
            { id: "akb-yamazaki-sora", name: "山﨑空", nameKana: "やまさき そら", nameEn: "Sora Yamazaki", generation: "17期生", groupId: "akb48" },
            // 18期生
            { id: "akb-akiyama-yuna", name: "秋山由奈", nameKana: "あきやま ゆな", nameEn: "Yuna Akiyama", generation: "18期生", groupId: "akb48" },
            { id: "akb-arai-sae", name: "新井彩永", nameKana: "あらい さえ", nameEn: "Sae Arai", generation: "18期生", groupId: "akb48" },
            { id: "akb-kudo-kasumi", name: "工藤華純", nameKana: "くどう かすみ", nameEn: "Kasumi Kudo", generation: "18期生", groupId: "akb48" },
            { id: "akb-kubo-hinano", name: "久保姫菜乃", nameKana: "くぼ ひなの", nameEn: "Hinano Kubo", generation: "18期生", groupId: "akb48" },
            { id: "akb-sako-yumemi", name: "迫由芽実", nameKana: "さこ ゆめみ", nameEn: "Yumemi Sako", generation: "18期生", groupId: "akb48" },
            { id: "akb-narita-kohina", name: "成田香姫奈", nameKana: "なりた こひな", nameEn: "Kohina Narita", generation: "18期生", groupId: "akb48" },
            { id: "akb-yagi-azuki", name: "八木愛月", nameKana: "やぎ あづき", nameEn: "Azuki Yagi", generation: "18期生", groupId: "akb48" },
            { id: "akb-yamaguchi-yui", name: "山口結愛", nameKana: "やまぐち ゆい", nameEn: "Yui Yamaguchi", generation: "18期生", groupId: "akb48" },
            // 19期生
            { id: "akb-ito-momoka", name: "伊藤百花", nameKana: "いとう ももか", nameEn: "Momoka Ito", generation: "19期生", groupId: "akb48" },
            { id: "akb-okumoto-kairi", name: "奥本カイリ", nameKana: "おくもと かいり", nameEn: "Kairi Okumoto", generation: "19期生", groupId: "akb48" },
            { id: "akb-kawamura-yui", name: "川村結衣", nameKana: "かわむら ゆい", nameEn: "Yui Kawamura", generation: "19期生", groupId: "akb48" },
            { id: "akb-shiratori-sari", name: "白鳥沙怜", nameKana: "しらとり さり", nameEn: "Sari Shiratori", generation: "19期生", groupId: "akb48" },
            { id: "akb-hanada-mei", name: "花田藍衣", nameKana: "はなだ めい", nameEn: "Mei Hanada", generation: "19期生", groupId: "akb48" },
            // 研究生
            { id: "akb-oga-saki", name: "大賀彩姫", nameKana: "おおが さき", nameEn: "Saki Oga", generation: "20期研究生", groupId: "akb48" },
            { id: "akb-kondo-saki", name: "近藤沙樹", nameKana: "こんどう さき", nameEn: "Saki Kondo", generation: "20期研究生", groupId: "akb48" },
            { id: "akb-maruyama-hinata", name: "丸山ひなた", nameKana: "まるやま ひなた", nameEn: "Hinata Maruyama", generation: "20期研究生", groupId: "akb48" },
            { id: "akb-takahashi-mao", name: "髙橋舞桜", nameKana: "たかはし まお", nameEn: "Mao Takahashi", generation: "21期研究生", groupId: "akb48" },
            { id: "akb-tanaka-sayuri", name: "田中沙友利", nameKana: "たなか さゆり", nameEn: "Sayuri Tanaka", generation: "21期研究生", groupId: "akb48" },
            { id: "akb-makito-ema", name: "牧戸愛茉", nameKana: "まきと えま", nameEn: "Ema Makito", generation: "21期研究生", groupId: "akb48" },
            { id: "akb-morikawa-yuu", name: "森川優", nameKana: "もりかわ ゆう", nameEn: "Yuu Morikawa", generation: "21期研究生", groupId: "akb48" },
            { id: "akb-watanabe-kiko", name: "渡邉葵心", nameKana: "わたなべ きこ", nameEn: "Kiko Watanabe", generation: "21期研究生", groupId: "akb48" },
        ],
    },
    {
        id: "ske48",
        name: "SKE48",
        slug: "ske48",
        color: "#FF9800",
        icon: "/groups/ske48.png",
        members: [
            // Team S
            { id: "ske-aikawa-honoka", name: "相川暖花", nameKana: "あいかわ ほのか", nameEn: "Honoka Aikawa", generation: "TeamS", groupId: "ske48" },
            { id: "ske-ishiguro-yuzuki", name: "石黒友月", nameKana: "いしぐろ ゆづき", nameEn: "Yuzuki Ishiguro", generation: "TeamS", groupId: "ske48" },
            { id: "ske-ito-kokomi", name: "伊藤虹々美", nameKana: "いとう ここみ", nameEn: "Kokomi Ito", generation: "TeamS", groupId: "ske48" },
            { id: "ske-iriyama-ryo", name: "入内嶋涼", nameKana: "いりうちじま りょう", nameEn: "Ryo Iriyama", generation: "TeamS", groupId: "ske48" },
            { id: "ske-kumazaki-haruka", name: "熊崎晴香", nameKana: "くまざき はるか", nameEn: "Haruka Kumazaki", generation: "TeamS", groupId: "ske48" },
            { id: "ske-kurashima-ami", name: "倉島杏実", nameKana: "くらしま あみ", nameEn: "Ami Kurashima", generation: "TeamS", groupId: "ske48" },
            { id: "ske-sakamoto-marin", name: "坂本真凛", nameKana: "さかもと まりん", nameEn: "Marin Sakamoto", generation: "TeamS", groupId: "ske48" },
            { id: "ske-sugimoto-rina", name: "杉本りいな", nameKana: "すぎもと りいな", nameEn: "Riina Sugimoto", generation: "TeamS", groupId: "ske48" },
            { id: "ske-suzuki-kokona", name: "鈴木恋奈", nameKana: "すずき ここな", nameEn: "Kokona Suzuki", generation: "TeamS", groupId: "ske48" },
            { id: "ske-nakano-airi", name: "中野愛理", nameKana: "なかの あいり", nameEn: "Airi Nakano", generation: "TeamS", groupId: "ske48" },
            { id: "ske-nomura-miyo", name: "野村実代", nameKana: "のむら みよ", nameEn: "Miyo Nomura", generation: "TeamS", groupId: "ske48" },
            { id: "ske-hara-yune", name: "原優寧", nameKana: "はら ゆうね", nameEn: "Yune Hara", generation: "TeamS", groupId: "ske48" },
            { id: "ske-yamamura-sakura", name: "山村さくら", nameKana: "やまむら さくら", nameEn: "Sakura Yamamura", generation: "TeamS", groupId: "ske48" },
            // Team KII
            { id: "ske-arano-himeka", name: "荒野姫楓", nameKana: "あらの ひめか", nameEn: "Himeka Arano", generation: "TeamKII", groupId: "ske48" },
            { id: "ske-ikeda-kaede", name: "池田楓", nameKana: "いけだ かえで", nameEn: "Kaede Ikeda", generation: "TeamKII", groupId: "ske48" },
            { id: "ske-ito-miki", name: "伊藤実希", nameKana: "いとう みき", nameEn: "Miki Ito", generation: "TeamKII", groupId: "ske48" },
            { id: "ske-inoue-ruka", name: "井上瑠夏", nameKana: "いのうえ るか", nameEn: "Ruka Inoue", generation: "TeamKII", groupId: "ske48" },
            { id: "ske-okuno-kokoha", name: "奥野心羽", nameKana: "おくの ここは", nameEn: "Kokoha Okuno", generation: "TeamKII", groupId: "ske48" },
            { id: "ske-kamata-natsuki", name: "鎌田菜月", nameKana: "かまた なつき", nameEn: "Natsuki Kamata", generation: "TeamKII", groupId: "ske48" },
            { id: "ske-kitagawa-yoshino", name: "北川愛乃", nameKana: "きたがわ よしの", nameEn: "Yoshino Kitagawa", generation: "TeamKII", groupId: "ske48" },
            { id: "ske-kito-mikuru", name: "鬼頭未来", nameKana: "きとう みくる", nameEn: "Mikuru Kito", generation: "TeamKII", groupId: "ske48" },
            { id: "ske-sato-kaho", name: "佐藤佳穂", nameKana: "さとう かほ", nameEn: "Kaho Sato", generation: "TeamKII", groupId: "ske48" },
            { id: "ske-sawada-kanon", name: "澤田奏音", nameKana: "さわだ かのん", nameEn: "Kanon Sawada", generation: "TeamKII", groupId: "ske48" },
            { id: "ske-shinohara-kyoka", name: "篠原京香", nameKana: "しのはら きょうか", nameEn: "Kyoka Shinohara", generation: "TeamKII", groupId: "ske48" },
            { id: "ske-sugawara-maya", name: "菅原茉椰", nameKana: "すがわら まや", nameEn: "Maya Sugawara", generation: "TeamKII", groupId: "ske48" },
            { id: "ske-suzuki-sara", name: "鈴木愛來", nameKana: "すずき さら", nameEn: "Sara Suzuki", generation: "TeamKII", groupId: "ske48" },
            { id: "ske-fujimoto-fuyuka", name: "藤本冬香", nameKana: "ふじもと ふゆか", nameEn: "Fuyuka Fujimoto", generation: "TeamKII", groupId: "ske48" },
            { id: "ske-matsumoto-chikako", name: "松本慈子", nameKana: "まつもと ちかこ", nameEn: "Chikako Matsumoto", generation: "TeamKII", groupId: "ske48" },
            // Team E
            { id: "ske-aomi-hinano", name: "青海ひな乃", nameKana: "あおみ ひなの", nameEn: "Hinano Aomi", generation: "TeamE", groupId: "ske48" },
            { id: "ske-aoki-rika", name: "青木莉樺", nameKana: "あおき りか", nameEn: "Rika Aoki", generation: "TeamE", groupId: "ske48" },
            { id: "ske-akahori-kimie", name: "赤堀君江", nameKana: "あかほり きみえ", nameEn: "Kimie Akahori", generation: "TeamE", groupId: "ske48" },
            { id: "ske-asai-yuka", name: "浅井裕華", nameKana: "あさい ゆうか", nameEn: "Yuka Asai", generation: "TeamE", groupId: "ske48" },
            { id: "ske-ida-reona", name: "井田玲音名", nameKana: "いだ れおな", nameEn: "Reona Ida", generation: "TeamE", groupId: "ske48" },
            { id: "ske-ota-ayaka", name: "太田彩夏", nameKana: "おおた あやか", nameEn: "Ayaka Ota", generation: "TeamE", groupId: "ske48" },
            { id: "ske-omura-anzu", name: "大村杏", nameKana: "おおむら あんず", nameEn: "Anzu Omura", generation: "TeamE", groupId: "ske48" },
            { id: "ske-kamimura-ayuka", name: "上村亜柚香", nameKana: "かみむら あゆか", nameEn: "Ayuka Kamimura", generation: "TeamE", groupId: "ske48" },
            { id: "ske-kawamura-yua", name: "河村優愛", nameKana: "かわむら ゆあ", nameEn: "Yua Kawamura", generation: "TeamE", groupId: "ske48" },
            { id: "ske-suzuki-ena", name: "鈴木愛菜", nameKana: "すずき えな", nameEn: "Ena Suzuki", generation: "TeamE", groupId: "ske48" },
            { id: "ske-nakasaka-miyu", name: "中坂美祐", nameKana: "なかさか みゆ", nameEn: "Miyu Nakasaka", generation: "TeamE", groupId: "ske48" },
            { id: "ske-nakamura-izumi", name: "仲村和泉", nameKana: "なかむら いずみ", nameEn: "Izumi Nakamura", generation: "TeamE", groupId: "ske48" },
            { id: "ske-nishii-mio", name: "西井美桜", nameKana: "にしい みお", nameEn: "Mio Nishii", generation: "TeamE", groupId: "ske48" },
            { id: "ske-morimoto-kurumi", name: "森本くるみ", nameKana: "もりもと くるみ", nameEn: "Kurumi Morimoto", generation: "TeamE", groupId: "ske48" },
        ],
    },
    {
        id: "nmb48",
        name: "NMB48",
        slug: "nmb48",
        color: "#FFC107",
        icon: "/groups/nmb48.png",
        members: [
            // 正規メンバー
            { id: "nmb-aobara-yuka", name: "青原優花", nameKana: "あおばら ゆうか", nameEn: "Yuka Aobara", generation: "9期生", groupId: "nmb48" },
            { id: "nmb-aobara-waka", name: "青原和花", nameKana: "あおばら わか", nameEn: "Waka Aobara", generation: "9期生", groupId: "nmb48" },
            { id: "nmb-abe-wakana", name: "安部若菜", nameKana: "あべ わかな", nameEn: "Wakana Abe", generation: "ドラフト3期生", groupId: "nmb48" },
            { id: "nmb-ike-honoka", name: "池帆乃香", nameKana: "いけ ほのか", nameEn: "Honoka Ike", generation: "8期生", groupId: "nmb48" },
            { id: "nmb-ikeda-tenna", name: "池田典愛", nameKana: "いけだ てんな", nameEn: "Tenna Ikeda", generation: "9期生", groupId: "nmb48" },
            { id: "nmb-ishiyama-chihiro", name: "石山千尋", nameKana: "いしやま ちひろ", nameEn: "Chihiro Ishiyama", generation: "研究生", groupId: "nmb48" },
            { id: "nmb-izumi-ayano", name: "泉綾乃", nameKana: "いずみ あやの", nameEn: "Ayano Izumi", generation: "ドラフト3期生", groupId: "nmb48" },
            { id: "nmb-itagaki-koyori", name: "板垣心和", nameKana: "いたがき こより", nameEn: "Koyori Itagaki", generation: "9期生", groupId: "nmb48" },
            { id: "nmb-kinugasa-ayami", name: "衣笠彩実", nameKana: "きぬがさ あやみ", nameEn: "Ayami Kinugasa", generation: "9期生", groupId: "nmb48" },
            { id: "nmb-kuroshima-sakura", name: "黒島咲花", nameKana: "くろしま さくら", nameEn: "Sakura Kuroshima", generation: "8期生", groupId: "nmb48" },
            { id: "nmb-sakashita-mako", name: "坂下真心", nameKana: "さかした まこ", nameEn: "Mako Sakashita", generation: "8期生", groupId: "nmb48" },
            { id: "nmb-sakata-misaki", name: "坂田心咲", nameKana: "さかた みさき", nameEn: "Misaki Sakata", generation: "8期生", groupId: "nmb48" },
            { id: "nmb-sakamoto-risa", name: "坂本理紗", nameKana: "さかもと りさ", nameEn: "Risa Sakamoto", generation: "8期生", groupId: "nmb48" },
            { id: "nmb-sakurada-ayaka", name: "桜田彩叶", nameKana: "さくらだ あやか", nameEn: "Ayaka Sakurada", generation: "8期生", groupId: "nmb48" },
            { id: "nmb-shiotsuki-keito", name: "塩月希依音", nameKana: "しおつき けいと", nameEn: "Keito Shiotsuki", generation: "ドラフト3期生", groupId: "nmb48" },
            { id: "nmb-shinzawa-nao", name: "新澤菜央", nameKana: "しんざわ なお", nameEn: "Nao Shinzawa", generation: "6期生", groupId: "nmb48" },
            { id: "nmb-takahashi-kotone", name: "高橋ことね", nameKana: "たかはし ことね", nameEn: "Kotone Takahashi", generation: "研究生", groupId: "nmb48" },
            { id: "nmb-takeda-kyoka", name: "竹田京加", nameKana: "たけだ きょうか", nameEn: "Kyoka Takeda", generation: "研究生", groupId: "nmb48" },
            { id: "nmb-tatsumoto-yayoi", name: "龍本弥生", nameKana: "たつもと やよい", nameEn: "Yayoi Tatsumoto", generation: "8期生", groupId: "nmb48" },
            { id: "nmb-tanaka-misora", name: "田中美空", nameKana: "たなか みそら", nameEn: "Misora Tanaka", generation: "9期生", groupId: "nmb48" },
            { id: "nmb-tanaka-yukino", name: "田中雪乃", nameKana: "たなか ゆきの", nameEn: "Yukino Tanaka", generation: "8期生", groupId: "nmb48" },
            { id: "nmb-nakagawa-tomoka", name: "中川朋香", nameKana: "なかがわ ともか", nameEn: "Tomoka Nakagawa", generation: "研究生", groupId: "nmb48" },
            { id: "nmb-nishi-yuma", name: "西由真", nameKana: "にし ゆうま", nameEn: "Yuma Nishi", generation: "9期生", groupId: "nmb48" },
            { id: "nmb-nishijima-rio", name: "西島梨央", nameKana: "にしじま りお", nameEn: "Rio Nishijima", generation: "9期生", groupId: "nmb48" },
            { id: "nmb-nishida-honoka", name: "西田帆花", nameKana: "にしだ ほのか", nameEn: "Honoka Nishida", generation: "9期生", groupId: "nmb48" },
            { id: "nmb-haga-rei", name: "芳賀礼", nameKana: "はが れい", nameEn: "Rei Haga", generation: "9期生", groupId: "nmb48" },
            { id: "nmb-hirayama-mai", name: "平山真衣", nameKana: "ひらやま まい", nameEn: "Mai Hirayama", generation: "7期生", groupId: "nmb48" },
            { id: "nmb-fukuno-ami", name: "福野杏実", nameKana: "ふくの あみ", nameEn: "Ami Fukuno", generation: "8期生", groupId: "nmb48" },
            { id: "nmb-funahashi-reina", name: "舟橋礼菜", nameKana: "ふなはし れいな", nameEn: "Reina Funahashi", generation: "9期生", groupId: "nmb48" },
            { id: "nmb-matsuoka-sakura", name: "松岡さくら", nameKana: "まつおか さくら", nameEn: "Sakura Matsuoka", generation: "8期生", groupId: "nmb48" },
            { id: "nmb-matsumoto-mihina", name: "松本海日菜", nameKana: "まつもと みひな", nameEn: "Mihina Matsumoto", generation: "8期生", groupId: "nmb48" },
            { id: "nmb-mikamo-kurumi", name: "三鴨くるみ", nameKana: "みかも くるみ", nameEn: "Kurumi Mikamo", generation: "研究生", groupId: "nmb48" },
            { id: "nmb-mizuta-shiori", name: "水田詩織", nameKana: "みずた しおり", nameEn: "Shiori Mizuta", generation: "5期生", groupId: "nmb48" },
            { id: "nmb-miyamoto-ami", name: "宮本杏海", nameKana: "みやもと あみ", nameEn: "Ami Miyamoto", generation: "9期生", groupId: "nmb48" },
            { id: "nmb-yoshimi-ayane", name: "吉見純音", nameKana: "よしみ あやね", nameEn: "Ayane Yoshimi", generation: "9期生", groupId: "nmb48" },
            // 研究生
            { id: "nmb-uchida-aisha", name: "内田愛彩", nameKana: "うちだ あいしゃ", nameEn: "Aisha Uchida", generation: "研究生", groupId: "nmb48" },
            { id: "nmb-kine-iroha", name: "木根彩呂花", nameKana: "きね いろは", nameEn: "Iroha Kine", generation: "研究生", groupId: "nmb48" },
            { id: "nmb-shibuya-asana", name: "澁谷愛紗南", nameKana: "しぶや あさな", nameEn: "Asana Shibuya", generation: "研究生", groupId: "nmb48" },
            { id: "nmb-tanaka-miria", name: "田中ミリア", nameKana: "たなか みりあ", nameEn: "Miria Tanaka", generation: "研究生", groupId: "nmb48" },
            { id: "nmb-miyazaki-sae", name: "宮崎紗衣", nameKana: "みやざき さえ", nameEn: "Sae Miyazaki", generation: "研究生", groupId: "nmb48" },
            { id: "nmb-miyahara-konon", name: "宮原心音", nameKana: "みやはら このん", nameEn: "Konon Miyahara", generation: "研究生", groupId: "nmb48" },
            { id: "nmb-murai-yuuri", name: "村井悠莉", nameKana: "むらい ゆうり", nameEn: "Yuuri Murai", generation: "研究生", groupId: "nmb48" },
            { id: "nmb-yamaguchi-mio", name: "山口美桜", nameKana: "やまぐち みお", nameEn: "Mio Yamaguchi", generation: "研究生", groupId: "nmb48" },
            // 11期研究生
            { id: "nmb-akamatsu-sora", name: "赤松昊", nameKana: "あかまつ そら", nameEn: "Sora Akamatsu", generation: "11期研究生", groupId: "nmb48" },
            { id: "nmb-okagoshi-seira", name: "岡腰星来", nameKana: "おかごし せいら", nameEn: "Seira Okagoshi", generation: "11期研究生", groupId: "nmb48" },
            { id: "nmb-sakurai-himari", name: "桜井ひまり", nameKana: "さくらい ひまり", nameEn: "Himari Sakurai", generation: "11期研究生", groupId: "nmb48" },
            { id: "nmb-zenke-yurika", name: "善家侑莉花", nameKana: "ぜんけ ゆりか", nameEn: "Yurika Zenke", generation: "11期研究生", groupId: "nmb48" },
            { id: "nmb-takahashi-juna", name: "高橋樹奈", nameKana: "たかはし じゅな", nameEn: "Juna Takahashi", generation: "11期研究生", groupId: "nmb48" },
            { id: "nmb-tanaka-rei", name: "田中れい", nameKana: "たなか れい", nameEn: "Rei Tanaka", generation: "11期研究生", groupId: "nmb48" },
            { id: "nmb-taniguchi-shino", name: "谷口詩乃", nameKana: "たにぐち しの", nameEn: "Shino Taniguchi", generation: "11期研究生", groupId: "nmb48" },
            { id: "nmb-nishizumi-misaki", name: "西住美咲妃", nameKana: "にしずみ みさき", nameEn: "Misaki Nishizumi", generation: "11期研究生", groupId: "nmb48" },
            { id: "nmb-fukuhara-kotomi", name: "福原琴美", nameKana: "ふくはら ことみ", nameEn: "Kotomi Fukuhara", generation: "11期研究生", groupId: "nmb48" },
            { id: "nmb-yabuuchi-hinata", name: "藪内陽花", nameKana: "やぶうち ひなた", nameEn: "Hinata Yabuuchi", generation: "11期研究生", groupId: "nmb48" },
            { id: "nmb-wada-kotone", name: "和田承子", nameKana: "わだ ことね", nameEn: "Kotone Wada", generation: "11期研究生", groupId: "nmb48" },
        ],
    },
    {
        id: "hkt48",
        name: "HKT48",
        slug: "hkt48",
        color: "#212121",
        icon: "/groups/hkt48.png",
        members: [
            // Team H
            { id: "hkt-ikuno-rina", name: "生野莉奈", nameKana: "いくの りな", nameEn: "Rina Ikuno", generation: "TeamH", groupId: "hkt48", birthday: "08-03" },
            { id: "hkt-ishibashi-ibuki", name: "石橋颯", nameKana: "いしばし いぶき", nameEn: "Ibuki Ishibashi", generation: "TeamH", groupId: "hkt48", birthday: "07-22" },
            { id: "hkt-ishimatsu-yuina", name: "石松結菜", nameKana: "いしまつ ゆいな", nameEn: "Yuina Ishimatsu", generation: "TeamH", groupId: "hkt48", birthday: "01-28" },
            { id: "hkt-ichimura-airi", name: "市村愛里", nameKana: "いちむら あいり", nameEn: "Airi Ichimura", generation: "TeamH", groupId: "hkt48", birthday: "02-13" },
            { id: "hkt-kitagawa-hiiro", name: "北川陽彩", nameKana: "きたがわ ひいろ", nameEn: "Hiiro Kitagawa", generation: "TeamH", groupId: "hkt48", birthday: "10-16" },
            { id: "hkt-kurihara-sae", name: "栗原紗英", nameKana: "くりはら さえ", nameEn: "Sae Kurihara", generation: "TeamH", groupId: "hkt48", birthday: "06-20" },
            { id: "hkt-sakamoto-rino", name: "坂本りの", nameKana: "さかもと りの", nameEn: "Rino Sakamoto", generation: "TeamH", groupId: "hkt48", birthday: "06-10" },
            { id: "hkt-shibui-mina", name: "渋井美奈", nameKana: "しぶい みな", nameEn: "Mina Shibui", generation: "TeamH", groupId: "hkt48", birthday: "03-23" },
            { id: "hkt-toyonaga-aki", name: "豊永阿紀", nameKana: "とよなが あき", nameEn: "Aki Toyonaga", generation: "TeamH", groupId: "hkt48", birthday: "10-25" },
            { id: "hkt-nakano-minami", name: "中野南実", nameKana: "なかの みなみ", nameEn: "Minami Nakano", generation: "TeamH", groupId: "hkt48", birthday: "08-28" },
            { id: "hkt-fujino-kokoha", name: "藤野心葉", nameKana: "ふじの ここは", nameEn: "Kokoha Fujino", generation: "TeamH", groupId: "hkt48", birthday: "05-25" },
            { id: "hkt-fuchigami-mai", name: "渕上舞", nameKana: "ふちがみ まい", nameEn: "Mai Fuchigami", generation: "TeamH", groupId: "hkt48", birthday: "09-21" },
            { id: "hkt-matsunaga-yura", name: "松永悠良", nameKana: "まつなが ゆら", nameEn: "Yura Matsunaga", generation: "TeamH", groupId: "hkt48", birthday: "11-13" },
            { id: "hkt-yanase-reia", name: "梁瀬鈴雅", nameKana: "やなせ れいあ", nameEn: "Reia Yanase", generation: "TeamH", groupId: "hkt48", birthday: "06-29" },
            { id: "hkt-yamauchi-yuna", name: "山内祐奈", nameKana: "やまうち ゆうな", nameEn: "Yuna Yamauchi", generation: "TeamH", groupId: "hkt48", birthday: "07-06" },
            { id: "hkt-ryuzu-ayane", name: "龍頭綺音", nameKana: "りゅうず あやね", nameEn: "Ayane Ryuzu", generation: "TeamH", groupId: "hkt48", birthday: "06-10" },
            // Team KIV
            { id: "hkt-akiyoshi-yuka", name: "秋吉優花", nameKana: "あきよし ゆか", nameEn: "Yuka Akiyoshi", generation: "TeamKIV", groupId: "hkt48", birthday: "10-24" },
            { id: "hkt-izawa-miyu", name: "井澤美優", nameKana: "いざわ みゆ", nameEn: "Miyu Izawa", generation: "TeamKIV", groupId: "hkt48", birthday: "11-07" },
            { id: "hkt-ishii-ayane", name: "石井彩音", nameKana: "いしい あやね", nameEn: "Ayane Ishii", generation: "TeamKIV", groupId: "hkt48", birthday: "11-27" },
            { id: "hkt-inohara-hanna", name: "猪原絆愛", nameKana: "いのはら はんな", nameEn: "Hanna Inohara", generation: "TeamKIV", groupId: "hkt48", birthday: "02-27" },
            { id: "hkt-imamura-maria", name: "今村麻莉愛", nameKana: "いまむら まりあ", nameEn: "Maria Imamura", generation: "TeamKIV", groupId: "hkt48", birthday: "09-14" },
            { id: "hkt-eura-yuka", name: "江浦優香", nameKana: "えうら ゆうか", nameEn: "Yuka Eura", generation: "TeamKIV", groupId: "hkt48", birthday: "05-03" },
            { id: "hkt-eguchi-kokoha", name: "江口心々華", nameKana: "えぐち ここは", nameEn: "Kokoha Eguchi", generation: "TeamKIV", groupId: "hkt48", birthday: "04-24" },
            { id: "hkt-ouchi-rinka", name: "大内梨果", nameKana: "おおうち りんか", nameEn: "Rinka Ouchi", generation: "TeamKIV", groupId: "hkt48", birthday: "07-28" },
            { id: "hkt-oba-risa", name: "大庭凜咲", nameKana: "おおば りさ", nameEn: "Risa Oba", generation: "TeamKIV", groupId: "hkt48", birthday: "04-23" },
            { id: "hkt-kuriyama-rina", name: "栗山梨奈", nameKana: "くりやま りな", nameEn: "Rina Kuriyama", generation: "TeamKIV", groupId: "hkt48", birthday: "12-30" },
            { id: "hkt-takemoto-kurumi", name: "竹本くるみ", nameKana: "たけもと くるみ", nameEn: "Kurumi Takemoto", generation: "TeamKIV", groupId: "hkt48", birthday: "02-22" },
            { id: "hkt-tachibana-kora", name: "立花心良", nameKana: "たちばな こら", nameEn: "Kora Tachibana", generation: "TeamKIV", groupId: "hkt48", birthday: "06-24" },
            { id: "hkt-tanaka-iori", name: "田中伊桜莉", nameKana: "たなか いおり", nameEn: "Iori Tanaka", generation: "TeamKIV", groupId: "hkt48", birthday: "08-31" },
            { id: "hkt-jitoe-nene", name: "地頭江音々", nameKana: "ぢとうえ ねね", nameEn: "Nene Jitoe", generation: "TeamKIV", groupId: "hkt48", birthday: "09-27" },
            { id: "hkt-fukui-karen", name: "福井可憐", nameKana: "ふくい かれん", nameEn: "Karen Fukui", generation: "TeamKIV", groupId: "hkt48", birthday: "12-04" },
            { id: "hkt-morisaki-saaya", name: "森﨑冴彩", nameKana: "もりさき さあや", nameEn: "Saaya Morisaki", generation: "TeamKIV", groupId: "hkt48", birthday: "01-16" },
            { id: "hkt-yasui-hina", name: "安井妃奈", nameKana: "やすい ひな", nameEn: "Hina Yasui", generation: "TeamKIV", groupId: "hkt48", birthday: "02-09" },
            // 7期研究生
            { id: "hkt-aoki-hinako", name: "青木日菜子", nameKana: "あおき ひなこ", nameEn: "Hinako Aoki", generation: "7期研究生", groupId: "hkt48", birthday: "07-16" },
            { id: "hkt-ishikawa-amyumi", name: "石川歩実優", nameKana: "いしかわ あみゆ", nameEn: "Amyumi Ishikawa", generation: "7期研究生", groupId: "hkt48", birthday: "12-21" },
            { id: "hkt-inoshima-rirea", name: "猪島莉玲亜", nameKana: "いのしま りれあ", nameEn: "Rirea Inoshima", generation: "7期研究生", groupId: "hkt48", birthday: "05-07" },
            { id: "hkt-kure-yuuna", name: "呉優菜", nameKana: "くれ ゆうな", nameEn: "Yuuna Kure", generation: "7期研究生", groupId: "hkt48", birthday: "02-13" },
            { id: "hkt-tsurukawa-nachi", name: "靏川那智", nameKana: "つるかわ なち", nameEn: "Nachi Tsurukawa", generation: "7期研究生", groupId: "hkt48", birthday: "12-07" },
            { id: "hkt-nagano-rara", name: "長野らら", nameKana: "ながの らら", nameEn: "Rara Nagano", generation: "7期研究生", groupId: "hkt48", birthday: "11-06" },
            { id: "hkt-matsumoto-ichika", name: "松本苺花", nameKana: "まつもと いちか", nameEn: "Ichika Matsumoto", generation: "7期研究生", groupId: "hkt48", birthday: "11-22" },
            { id: "hkt-yamakawa-maria", name: "山川万里愛", nameKana: "やまかわ まりあ", nameEn: "Maria Yamakawa", generation: "7期研究生", groupId: "hkt48", birthday: "10-25" },
            { id: "hkt-yoshida-mei", name: "吉田めい", nameKana: "よしだ めい", nameEn: "Mei Yoshida", generation: "7期研究生", groupId: "hkt48", birthday: "05-07" },
        ],
    },
    {
        id: "ngt48",
        name: "NGT48",
        slug: "ngt48",
        color: "#81D4FA",
        icon: "/groups/ngt48.png",
        members: [
            { id: "ngt-fujisaki-miyu", name: "藤崎未夢", nameKana: "ふじさき みゆ", nameEn: "Miyu Fujisaki", generation: "キャプテン", groupId: "ngt48", birthday: "11-17" },
            { id: "ngt-nishigata-marina", name: "西潟茉莉奈", nameKana: "にしがた まりな", nameEn: "Marina Nishigata", generation: "1期生", groupId: "ngt48", birthday: "10-16" },
            { id: "ngt-seiji-reina", name: "清司麗菜", nameKana: "せいじ れいな", nameEn: "Reina Seiji", generation: "1期生", groupId: "ngt48", birthday: "04-19" },
            { id: "ngt-sato-kairi", name: "佐藤海里", nameKana: "さとう かいり", nameEn: "Kairi Sato", generation: "D3期生", groupId: "ngt48", birthday: "08-05" },
            { id: "ngt-otsuka-nanami", name: "大塚七海", nameKana: "おおつか ななみ", nameEn: "Nanami Otsuka", generation: "2期生", groupId: "ngt48", birthday: "11-07" },
            { id: "ngt-mimura-hino", name: "三村妃乃", nameKana: "みむら ひの", nameEn: "Hino Mimura", generation: "2期生", groupId: "ngt48", birthday: "06-15" },
        ],
    },
    {
        id: "stu48",
        name: "STU48",
        slug: "stu48",
        color: "#1565C0",
        icon: "/groups/stu48.png",
        members: [
            // 1期生
            { id: "stu-ishida-chiho", name: "石田千穂", nameKana: "いしだ ちほ", nameEn: "Chiho Ishida", generation: "1期生", groupId: "stu48", birthday: "03-17" },
            { id: "stu-taniguchi-mahina", name: "谷口茉妃菜", nameKana: "たにぐち まひな", nameEn: "Mahina Taniguchi", generation: "1期生", groupId: "stu48", birthday: "02-03" },
            { id: "stu-hyodo-aoi", name: "兵頭葵", nameKana: "ひょうどう あおい", nameEn: "Aoi Hyodo", generation: "1期生", groupId: "stu48", birthday: "01-18" },
            { id: "stu-fukuda-akari", name: "福田朱里", nameKana: "ふくだ あかり", nameEn: "Akari Fukuda", generation: "1期生", groupId: "stu48", birthday: "03-29" },
            // ドラフト3期生
            { id: "stu-shinano-soraha", name: "信濃宙花", nameKana: "しなの そらは", nameEn: "Soraha Shinano", generation: "D3期生", groupId: "stu48", birthday: "08-09" },
            { id: "stu-nakamura-mai", name: "中村舞", nameKana: "なかむら まい", nameEn: "Mai Nakamura", generation: "D3期生", groupId: "stu48", birthday: "04-04" },
            // 2期生
            { id: "stu-ikeda-yura", name: "池田裕楽", nameKana: "いけだ ゆら", nameEn: "Yura Ikeda", generation: "2期生", groupId: "stu48", birthday: "11-07" },
            { id: "stu-utsumi-rion", name: "内海里音", nameKana: "うつみ りおん", nameEn: "Rion Utsumi", generation: "2期生", groupId: "stu48", birthday: "09-12" },
            { id: "stu-ozaki-serika", name: "尾崎世里花", nameKana: "おざき せりか", nameEn: "Serika Ozaki", generation: "2期生", groupId: "stu48", birthday: "08-07" },
            { id: "stu-kawamata-yuuna", name: "川又優菜", nameKana: "かわまた ゆうな", nameEn: "Yuuna Kawamata", generation: "2期生", groupId: "stu48", birthday: "12-03" },
            { id: "stu-kudo-riko", name: "工藤理子", nameKana: "くどう りこ", nameEn: "Riko Kudo", generation: "2期生", groupId: "stu48", birthday: "05-25" },
            { id: "stu-sako-himeka", name: "迫姫華", nameKana: "さこ ひめか", nameEn: "Himeka Sako", generation: "2期生", groupId: "stu48", birthday: "04-27" },
            { id: "stu-shimizu-sara", name: "清水紗良", nameKana: "しみず さら", nameEn: "Sara Shimizu", generation: "2期生", groupId: "stu48", birthday: "07-14" },
            { id: "stu-takao-sayaka", name: "高雄さやか", nameKana: "たかお さやか", nameEn: "Sayaka Takao", generation: "2期生", groupId: "stu48", birthday: "10-29" },
            { id: "stu-harada-sayaka", name: "原田清花", nameKana: "はらだ さやか", nameEn: "Sayaka Harada", generation: "2期生", groupId: "stu48", birthday: "06-16" },
            { id: "stu-muneyuki-rika", name: "宗雪里香", nameKana: "むねゆき りか", nameEn: "Rika Muneyuki", generation: "2期生", groupId: "stu48", birthday: "02-07" },
            { id: "stu-yoshida-sara", name: "吉田彩良", nameKana: "よしだ さら", nameEn: "Sara Yoshida", generation: "2期生", groupId: "stu48", birthday: "09-27" },
            { id: "stu-watanabe-natsuki", name: "渡辺菜月", nameKana: "わたなべ なつき", nameEn: "Natsuki Watanabe", generation: "2期生", groupId: "stu48", birthday: "08-24" },
            // 2.5期生
            { id: "stu-okada-azumi", name: "岡田あずみ", nameKana: "おかだ あずみ", nameEn: "Azumi Okada", generation: "2.5期生", groupId: "stu48", birthday: "11-14" },
            { id: "stu-okamura-rio", name: "岡村梨央", nameKana: "おかむら りお", nameEn: "Rio Okamura", generation: "2.5期生", groupId: "stu48", birthday: "08-22" },
            { id: "stu-kurushima-yuka", name: "久留島優果", nameKana: "くるしま ゆか", nameEn: "Yuka Kurushima", generation: "2.5期生", groupId: "stu48", birthday: "10-01" },
            { id: "stu-shokatu-noa", name: "諸葛望愛", nameKana: "しょかつ のあ", nameEn: "Noa Shokatu", generation: "2.5期生", groupId: "stu48", birthday: "07-18" },
            // 3期生
            { id: "stu-arai-rian", name: "新井梨杏", nameKana: "あらい りあん", nameEn: "Rian Arai", generation: "3期生", groupId: "stu48", birthday: "01-29" },
            { id: "stu-ishihara-yuna", name: "石原侑奈", nameKana: "いしはら ゆな", nameEn: "Yuna Ishihara", generation: "3期生", groupId: "stu48", birthday: "04-08" },
            { id: "stu-okuda-yuina", name: "奥田唯菜", nameKana: "おくだ ゆいな", nameEn: "Yuina Okuda", generation: "3期生", groupId: "stu48", birthday: "03-02" },
            { id: "stu-kitazawa-ichigo", name: "北澤苺", nameKana: "きたざわ いちご", nameEn: "Ichigo Kitazawa", generation: "3期生", groupId: "stu48", birthday: "01-22" },
            { id: "stu-sogawa-saki", name: "曽川咲葵", nameKana: "そがわ さき", nameEn: "Saki Sogawa", generation: "3期生", groupId: "stu48", birthday: "11-03" },
            { id: "stu-hamada-hibiki", name: "濵田響", nameKana: "はまだ ひびき", nameEn: "Hibiki Hamada", generation: "3期生", groupId: "stu48", birthday: "05-21" },
            { id: "stu-morisue-hina", name: "森末妃奈", nameKana: "もりすえ ひな", nameEn: "Hina Morisue", generation: "3期生", groupId: "stu48", birthday: "12-12" },
        ],
    },
    // STARTOグループ
    {
        id: "kingandprince",
        name: "King & Prince",
        slug: "kingandprince",
        color: "#8B0000",
        icon: "/groups/kingandprince.png",
        members: [
            { id: "kp-nagase-ren", name: "永瀬廉", nameKana: "ながせ れん", nameEn: "Ren Nagase", generation: "", groupId: "kingandprince", birthday: "01-23" },
            { id: "kp-takahashi-kaito", name: "髙橋海人", nameKana: "たかはし かいと", nameEn: "Kaito Takahashi", generation: "", groupId: "kingandprince", birthday: "04-03" },
        ],
    },
    {
        id: "naniwa-danshi",
        name: "なにわ男子",
        slug: "naniwa-danshi",
        color: "#FF5722",
        icon: "/groups/naniwa-danshi.png",
        members: [
            { id: "nw-nishihata-daigo", name: "西畑大吾", nameKana: "にしはた だいご", nameEn: "Daigo Nishihata", generation: "", groupId: "naniwa-danshi", birthday: "01-09" },
            { id: "nw-onishi-ryusei", name: "大西流星", nameKana: "おおにし りゅうせい", nameEn: "Ryusei Onishi", generation: "", groupId: "naniwa-danshi", birthday: "08-07" },
            { id: "nw-michieda-shunsuke", name: "道枝駿佑", nameKana: "みちえだ しゅんすけ", nameEn: "Shunsuke Michieda", generation: "", groupId: "naniwa-danshi", birthday: "07-25" },
            { id: "nw-takahashi-kyohei", name: "高橋恭平", nameKana: "たかはし きょうへい", nameEn: "Kyohei Takahashi", generation: "", groupId: "naniwa-danshi", birthday: "02-28" },
            { id: "nw-nagao-kento", name: "長尾謙杜", nameKana: "ながお けんと", nameEn: "Kento Nagao", generation: "", groupId: "naniwa-danshi", birthday: "08-15" },
            { id: "nw-fujiwara-joichiro", name: "藤原丈一郎", nameKana: "ふじわら じょういちろう", nameEn: "Joichiro Fujiwara", generation: "", groupId: "naniwa-danshi", birthday: "02-08" },
            { id: "nw-ohashi-kazuya", name: "大橋和也", nameKana: "おおはし かずや", nameEn: "Kazuya Ohashi", generation: "", groupId: "naniwa-danshi", birthday: "08-09" },
        ],
    },
    {
        id: "travis-japan",
        name: "Travis Japan",
        slug: "travis-japan",
        color: "#7B1FA2",
        icon: "/groups/travis-japan.png",
        members: [
            { id: "tj-miyachika-kaito", name: "宮近海斗", nameKana: "みやちか かいと", nameEn: "Kaito Miyachika", generation: "", groupId: "travis-japan", birthday: "09-22" },
            { id: "tj-nakamura-kaito", name: "中村海斗", nameKana: "なかむら かいと", nameEn: "Kaito Nakamura", generation: "", groupId: "travis-japan", birthday: "04-15" },
            { id: "tj-shimekake-ryuya", name: "七五三掛龍也", nameKana: "しめかけ りゅうや", nameEn: "Ryuya Shimekake", generation: "", groupId: "travis-japan", birthday: "06-23" },
            { id: "tj-kawashima-noel", name: "川島如恵留", nameKana: "かわしま のえる", nameEn: "Noel Kawashima", generation: "", groupId: "travis-japan", birthday: "11-22" },
            { id: "tj-yoshizawa-shizuya", name: "吉澤閑也", nameKana: "よしざわ しずや", nameEn: "Shizuya Yoshizawa", generation: "", groupId: "travis-japan", birthday: "08-10" },
            { id: "tj-matsuda-genta", name: "松田元太", nameKana: "まつだ げんた", nameEn: "Genta Matsuda", generation: "", groupId: "travis-japan", birthday: "04-19" },
            { id: "tj-matsukura-kaito", name: "松倉海斗", nameKana: "まつくら かいと", nameEn: "Kaito Matsukura", generation: "", groupId: "travis-japan", birthday: "11-14" },
        ],
    },
    // ハロプロ
    {
        id: "morningmusume",
        name: "モーニング娘。'26",
        slug: "morningmusume",
        color: "#FF5722",
        icon: "/groups/morningmusume.png",
        members: [
            { id: "mm-nonaka-miki", name: "野中美希", nameKana: "のなか みき", nameEn: "Miki Nonaka", generation: "12期", groupId: "morningmusume", birthday: "10-07" },
            { id: "mm-oda-sakura", name: "小田さくら", nameKana: "おだ さくら", nameEn: "Sakura Oda", generation: "11期", groupId: "morningmusume", birthday: "03-12" },
            { id: "mm-makino-maria", name: "牧野真莉愛", nameKana: "まきの まりあ", nameEn: "Maria Makino", generation: "12期", groupId: "morningmusume", birthday: "02-02" },
            { id: "mm-okamura-homare", name: "岡村ほまれ", nameKana: "おかむら ほまれ", nameEn: "Homare Okamura", generation: "15期", groupId: "morningmusume", birthday: "05-09" },
            { id: "mm-yamazaki-mei", name: "山﨑愛生", nameKana: "やまざき めい", nameEn: "Mei Yamazaki", generation: "15期", groupId: "morningmusume", birthday: "06-28" },
            { id: "mm-sakurai-rio", name: "櫻井梨央", nameKana: "さくらい りお", nameEn: "Rio Sakurai", generation: "16期", groupId: "morningmusume", birthday: "11-11" },
            { id: "mm-inoue-haruka", name: "井上春華", nameKana: "いのうえ はるか", nameEn: "Haruka Inoue", generation: "17期", groupId: "morningmusume", birthday: "05-06" },
            { id: "mm-yumita-akane", name: "弓桁朱琴", nameKana: "ゆみた あかね", nameEn: "Akane Yumita", generation: "17期", groupId: "morningmusume", birthday: "07-08" },
        ],
    },
    {
        id: "juicejuice",
        name: "Juice=Juice",
        slug: "juicejuice",
        color: "#7B1FA2",
        icon: "/groups/juicejuice.png",
        members: [
            { id: "jj-danbara-ruru", name: "段原瑠々", nameKana: "だんばら るる", nameEn: "Ruru Danbara", generation: "", groupId: "juicejuice", birthday: "05-07" },
            { id: "jj-inoue-rei", name: "井上玲音", nameKana: "いのうえ れい", nameEn: "Rei Inoue", generation: "", groupId: "juicejuice", birthday: "07-17" },
            { id: "jj-kudo-yume", name: "工藤由愛", nameKana: "くどう ゆめ", nameEn: "Yume Kudo", generation: "", groupId: "juicejuice", birthday: "09-28" },
            { id: "jj-matsunaga-riai", name: "松永里愛", nameKana: "まつなが りあい", nameEn: "Riai Matsunaga", generation: "", groupId: "juicejuice", birthday: "07-07" },
            { id: "jj-arisawa-ichika", name: "有澤一華", nameKana: "ありさわ いちか", nameEn: "Ichika Arisawa", generation: "", groupId: "juicejuice", birthday: "12-23" },
            { id: "jj-irie-risa", name: "入江里咲", nameKana: "いりえ りさ", nameEn: "Risa Irie", generation: "", groupId: "juicejuice", birthday: "10-18" },
            { id: "jj-ebata-kisaki", name: "江端妃咲", nameKana: "えばた きさき", nameEn: "Kisaki Ebata", generation: "", groupId: "juicejuice", birthday: "01-30" },
            { id: "jj-ishiyama-sakura", name: "石山咲良", nameKana: "いしやま さくら", nameEn: "Sakura Ishiyama", generation: "", groupId: "juicejuice", birthday: "02-22" },
        ],
    },
    {
        id: "angerme",
        name: "アンジュルム",
        slug: "angerme",
        color: "#F48FB1",
        icon: "/groups/angerme.png",
        members: [
            { id: "ag-ise-layla", name: "伊勢鈴蘭", nameKana: "いせ れいら", nameEn: "Layla Ise", generation: "", groupId: "angerme", birthday: "01-19" },
            { id: "ag-hashisako-rin", name: "橋迫鈴", nameKana: "はしさこ りん", nameEn: "Rin Hashisako", generation: "", groupId: "angerme", birthday: "10-06" },
            { id: "ag-tamenaga-shion", name: "為永幸音", nameKana: "ためなが しおん", nameEn: "Shion Tamenaga", generation: "", groupId: "angerme", birthday: "02-09" },
            { id: "ag-kawana-rin", name: "川名凜", nameKana: "かわな りん", nameEn: "Rin Kawana", generation: "", groupId: "angerme", birthday: "12-06" },
            { id: "ag-matsumoto-wakana", name: "松本わかな", nameKana: "まつもと わかな", nameEn: "Wakana Matsumoto", generation: "", groupId: "angerme", birthday: "09-01" },
            { id: "ag-hirayama-yuki", name: "平山遊季", nameKana: "ひらやま ゆき", nameEn: "Yuki Hirayama", generation: "", groupId: "angerme", birthday: "07-25" },
            { id: "ag-shimoitani-yukiho", name: "下井谷幸穂", nameKana: "しもいたに ゆきほ", nameEn: "Yukiho Shimoitani", generation: "", groupId: "angerme", birthday: "08-04" },
            { id: "ag-goto-hana", name: "後藤花", nameKana: "ごとう はな", nameEn: "Hana Goto", generation: "", groupId: "angerme", birthday: "06-05" },
        ],
    },
    {
        id: "beyooooonds",
        name: "BEYOOOOONDS",
        slug: "beyooooonds",
        color: "#FFC107",
        icon: "/groups/beyooooonds.png",
        members: [
            { id: "by-takase-kurumi", name: "高瀬くるみ", nameKana: "たかせ くるみ", nameEn: "Kurumi Takase", generation: "雨ノ森川海", groupId: "beyooooonds", birthday: "03-16" },
            { id: "by-maeda-kokoro", name: "前田こころ", nameKana: "まえだ こころ", nameEn: "Kokoro Maeda", generation: "雨ノ森川海", groupId: "beyooooonds", birthday: "06-23" },
            { id: "by-okamura-minami", name: "岡村美波", nameKana: "おかむら みなみ", nameEn: "Minami Okamura", generation: "雨ノ森川海", groupId: "beyooooonds", birthday: "10-20" },
            { id: "by-kiyono-momohime", name: "清野桃々姫", nameKana: "きよの ももひめ", nameEn: "Momohime Kiyono", generation: "雨ノ森川海", groupId: "beyooooonds", birthday: "12-22" },
            { id: "by-nishida-shiori", name: "西田汐里", nameKana: "にしだ しおり", nameEn: "Shiori Nishida", generation: "CHICA#TETSU", groupId: "beyooooonds", birthday: "06-07" },
            { id: "by-eguchi-saya", name: "江口紗耶", nameKana: "えぐち さや", nameEn: "Saya Eguchi", generation: "CHICA#TETSU", groupId: "beyooooonds", birthday: "08-01" },
            { id: "by-hirai-miyo", name: "平井美葉", nameKana: "ひらい みよ", nameEn: "Miyo Hirai", generation: "SeasoningS", groupId: "beyooooonds", birthday: "12-11" },
            { id: "by-kobayashi-honoka", name: "小林萌花", nameKana: "こばやし ほのか", nameEn: "Honoka Kobayashi", generation: "SeasoningS", groupId: "beyooooonds", birthday: "08-16" },
            { id: "by-satoyoshi-utano", name: "里吉うたの", nameKana: "さとよし うたの", nameEn: "Utano Satoyoshi", generation: "SeasoningS", groupId: "beyooooonds", birthday: "09-22" },
        ],
    },
    {
        id: "tsubaki-factory",
        name: "つばきファクトリー",
        slug: "tsubaki-factory",
        color: "#D32F2F",
        icon: "/groups/tsubaki-factory.png",
        members: [
            { id: "tf-yamagishi-riko", name: "山岸理子", nameKana: "やまぎし りこ", nameEn: "Riko Yamagishi", generation: "", groupId: "tsubaki-factory", birthday: "11-24" },
            { id: "tf-ogata-risa", name: "小片リサ", nameKana: "おがた りさ", nameEn: "Risa Ogata", generation: "", groupId: "tsubaki-factory", birthday: "11-05" },
            { id: "tf-niinuma-kisora", name: "新沼希空", nameKana: "にいぬま きそら", nameEn: "Kisora Niinuma", generation: "", groupId: "tsubaki-factory", birthday: "10-20" },
            { id: "tf-tanimoto-ami", name: "谷本安美", nameKana: "たにもと あみ", nameEn: "Ami Tanimoto", generation: "", groupId: "tsubaki-factory", birthday: "11-16" },
            { id: "tf-kishimoto-yumeno", name: "岸本ゆめの", nameKana: "きしもと ゆめの", nameEn: "Yumeno Kishimoto", generation: "", groupId: "tsubaki-factory", birthday: "04-01" },
            { id: "tf-asakura-kiki", name: "浅倉樹々", nameKana: "あさくら きき", nameEn: "Kiki Asakura", generation: "", groupId: "tsubaki-factory", birthday: "09-03" },
            { id: "tf-ono-mizuho", name: "小野瑞歩", nameKana: "おの みずほ", nameEn: "Mizuho Ono", generation: "", groupId: "tsubaki-factory", birthday: "09-29" },
            { id: "tf-akiyama-mao", name: "秋山眞緒", nameKana: "あきやま まお", nameEn: "Mao Akiyama", generation: "", groupId: "tsubaki-factory", birthday: "07-29" },
        ],
    },
    {
        id: "ocha-norma",
        name: "OCHA NORMA",
        slug: "ocha-norma",
        color: "#4CAF50",
        icon: "/groups/ocha-norma.png",
        members: [
            { id: "on-saito-madoka", name: "斉藤円香", nameKana: "さいとう まどか", nameEn: "Madoka Saito", generation: "", groupId: "ocha-norma", birthday: "10-28" },
            { id: "on-hiromoto-ruli", name: "広本瑠璃", nameKana: "ひろもと るり", nameEn: "Ruli Hiromoto", generation: "", groupId: "ocha-norma", birthday: "06-18" },
            { id: "on-yonemura-kirara", name: "米村姫良々", nameKana: "よねむら きらら", nameEn: "Kirara Yonemura", generation: "", groupId: "ocha-norma", birthday: "04-30" },
            { id: "on-kubota-nanami", name: "窪田七海", nameKana: "くぼた ななみ", nameEn: "Nanami Kubota", generation: "", groupId: "ocha-norma", birthday: "07-23" },
            { id: "on-nakayama-natsume", name: "中山夏月姫", nameKana: "なかやま なつめ", nameEn: "Natsume Nakayama", generation: "", groupId: "ocha-norma", birthday: "07-20" },
            { id: "on-nishizaki-miku", name: "西﨑美空", nameKana: "にしざき みく", nameEn: "Miku Nishizaki", generation: "", groupId: "ocha-norma", birthday: "04-17" },
            { id: "on-kitahara-momo", name: "北原もも", nameKana: "きたはら もも", nameEn: "Momo Kitahara", generation: "", groupId: "ocha-norma", birthday: "08-30" },
            { id: "on-tsutsui-roko", name: "筒井澪心", nameKana: "つつい ろこ", nameEn: "Roko Tsutsui", generation: "", groupId: "ocha-norma", birthday: "08-10" },
        ],
    },
    // KAWAII LAB.
    {
        id: "fruitszipper",
        name: "FRUITS ZIPPER",
        slug: "fruitszipper",
        color: "#FF6B6B",
        icon: "/groups/fruitszipper.png",
        members: [
            { id: "fz-tsukiashi-amane", name: "月足天音", nameKana: "つきあし あまね", nameEn: "Amane Tsukiashi", generation: "", groupId: "fruitszipper", birthday: "10-26" },
            { id: "fz-chinzei-suzuka", name: "鎮西寿々歌", nameKana: "ちんぜい すずか", nameEn: "Suzuka Chinzei", generation: "", groupId: "fruitszipper", birthday: "02-24" },
            { id: "fz-sakurai-yui", name: "櫻井優衣", nameKana: "さくらい ゆい", nameEn: "Yui Sakurai", generation: "", groupId: "fruitszipper", birthday: "01-04" },
            { id: "fz-nakagawa-runa", name: "仲川瑠夏", nameKana: "なかがわ るな", nameEn: "Runa Nakagawa", generation: "", groupId: "fruitszipper", birthday: "11-05" },
            { id: "fz-manaka-mana", name: "真中まな", nameKana: "まなか まな", nameEn: "Mana Manaka", generation: "", groupId: "fruitszipper", birthday: "04-22" },
            { id: "fz-matsumoto-karen", name: "松本かれん", nameKana: "まつもと かれん", nameEn: "Karen Matsumoto", generation: "", groupId: "fruitszipper", birthday: "03-28" },
            { id: "fz-hayase-noel", name: "早瀬ノエル", nameKana: "はやせ のえる", nameEn: "Noel Hayase", generation: "", groupId: "fruitszipper", birthday: "12-29" },
        ],
    },
    {
        id: "candytune",
        name: "CANDY TUNE",
        slug: "candytune",
        color: "#FFB6C1",
        icon: "/groups/candytune.png",
        members: [
            { id: "ct-kirihara-mitsuki", name: "桐原美月", nameKana: "きりはら みつき", nameEn: "Mitsuki Kirihara", generation: "", groupId: "candytune", birthday: "09-04" },
            { id: "ct-fukuyama-rino", name: "福山梨乃", nameKana: "ふくやま りの", nameEn: "Rino Fukuyama", generation: "", groupId: "candytune", birthday: "11-14" },
            { id: "ct-ogawa-nanako", name: "小川奈々子", nameKana: "おがわ ななこ", nameEn: "Nanako Ogawa", generation: "", groupId: "candytune", birthday: "06-26" },
            { id: "ct-minami-natsu", name: "南なつ", nameKana: "みなみ なつ", nameEn: "Natsu Minami", generation: "", groupId: "candytune", birthday: "03-17" },
            { id: "ct-tachibana-kotomi", name: "立花琴未", nameKana: "たちばな ことみ", nameEn: "Kotomi Tachibana", generation: "", groupId: "candytune", birthday: "05-25" },
            { id: "ct-miyano-shizuka", name: "宮野静", nameKana: "みやの しずか", nameEn: "Shizuka Miyano", generation: "", groupId: "candytune", birthday: "08-23" },
            { id: "ct-murakawa-bibian", name: "村川緋杏", nameKana: "むらかわ びびあん", nameEn: "Bibian Murakawa", generation: "", groupId: "candytune", birthday: "12-03" },
        ],
    },
    {
        id: "sweetsteady",
        name: "SWEET STEADY",
        slug: "sweetsteady",
        color: "#98D8C8",
        icon: "/groups/sweetsteady.png",
        members: [
            { id: "ss-okuda-ayu", name: "奥田彩友", nameKana: "おくだ あゆ", nameEn: "Ayu Okuda", generation: "", groupId: "sweetsteady", birthday: "01-07" },
            { id: "ss-otoi-yui", name: "音井結衣", nameKana: "おとい ゆい", nameEn: "Yui Otoi", generation: "", groupId: "sweetsteady", birthday: "01-09" },
            { id: "ss-kurita-natsuka", name: "栗田なつか", nameKana: "くりた なつか", nameEn: "Natsuka Kurita", generation: "", groupId: "sweetsteady", birthday: "07-19" },
            { id: "ss-shiokawa-rise", name: "塩川莉世", nameKana: "しおかわ りせ", nameEn: "Rise Shiokawa", generation: "", groupId: "sweetsteady", birthday: "07-31" },
            { id: "ss-shiraishi-mayumi", name: "白石まゆみ", nameKana: "しらいし まゆみ", nameEn: "Mayumi Shiraishi", generation: "", groupId: "sweetsteady", birthday: "12-27" },
            { id: "ss-shoji-nagisa", name: "庄司なぎさ", nameKana: "しょうじ なぎさ", nameEn: "Nagisa Shoji", generation: "", groupId: "sweetsteady", birthday: "10-29" },
            { id: "ss-yamauchi-sakina", name: "山内咲奈", nameKana: "やまうち さきな", nameEn: "Sakina Yamauchi", generation: "", groupId: "sweetsteady", birthday: "02-28" },
            { id: "ss-yanagawa-mia", name: "柳川みあ", nameKana: "やながわ みあ", nameEn: "Mia Yanagawa", generation: "", groupId: "sweetsteady", birthday: "09-30" },
        ],
    },
    {
        id: "cutiestreet",
        name: "CUTIE STREET",
        slug: "cutiestreet",
        color: "#DDA0DD",
        icon: "/groups/cutiestreet.png",
        members: [
            { id: "cs-furusawa-risa", name: "古澤里紗", nameKana: "ふるさわ りさ", nameEn: "Risa Furusawa", generation: "", groupId: "cutiestreet", birthday: "11-08" },
            { id: "cs-sano-aika", name: "佐野愛花", nameKana: "さの あいか", nameEn: "Aika Sano", generation: "", groupId: "cutiestreet", birthday: "11-26" },
            { id: "cs-itakura-kana", name: "板倉可奈", nameKana: "いたくら かな", nameEn: "Kana Itakura", generation: "", groupId: "cutiestreet", birthday: "11-11" },
            { id: "cs-masuda-ayano", name: "増田彩乃", nameKana: "ますだ あやの", nameEn: "Ayano Masuda", generation: "", groupId: "cutiestreet", birthday: "05-26" },
            { id: "cs-kawamoto-emiru", name: "川本笑瑠", nameKana: "かわもと えみる", nameEn: "Emiru Kawamoto", generation: "", groupId: "cutiestreet", birthday: "04-22" },
            { id: "cs-umeda-miyu", name: "梅田みゆ", nameKana: "うめだ みゆ", nameEn: "Miyu Umeda", generation: "", groupId: "cutiestreet", birthday: "09-13" },
            { id: "cs-manabe-nagisa", name: "真鍋凪咲", nameKana: "まなべ なぎさ", nameEn: "Nagisa Manabe", generation: "", groupId: "cutiestreet", birthday: "06-28" },
            { id: "cs-sakuraba-haruka", name: "桜庭遥花", nameKana: "さくらば はるか", nameEn: "Haruka Sakuraba", generation: "", groupId: "cutiestreet", birthday: "01-29" },
        ],
    },
    {
        id: "morestar",
        name: "MORE STAR",
        slug: "morestar",
        color: "#FFD700",
        icon: "/groups/morestar.png",
        members: [
            { id: "ms-arai-kokona", name: "新井心菜", nameKana: "あらい ここな", nameEn: "Kokona Arai", generation: "", groupId: "morestar" },
            { id: "ms-endo-marin", name: "遠藤まりん", nameKana: "えんどう まりん", nameEn: "Marin Endo", generation: "", groupId: "morestar" },
            { id: "ms-sasahara-nanaka", name: "笹原なな花", nameKana: "ささはら ななか", nameEn: "Nanaka Sasahara", generation: "", groupId: "morestar" },
            { id: "ms-suzuki-karin", name: "鈴木花梨", nameKana: "すずき かりん", nameEn: "Karin Suzuki", generation: "", groupId: "morestar" },
            { id: "ms-takanashi-yuna", name: "高梨ゆな", nameKana: "たかなし ゆな", nameEn: "Yuna Takanashi", generation: "", groupId: "morestar" },
            { id: "ms-nakayama-kohaku", name: "中山こはく", nameKana: "なかやま こはく", nameEn: "Kohaku Nakayama", generation: "", groupId: "morestar" },
            { id: "ms-hagita-sora", name: "萩田そら", nameKana: "はぎた そら", nameEn: "Sora Hagita", generation: "", groupId: "morestar" },
            { id: "ms-morita-ami", name: "森田あみ", nameKana: "もりた あみ", nameEn: "Ami Morita", generation: "", groupId: "morestar" },
            { id: "ms-yamamoto-rushia", name: "山本るしあ", nameKana: "やまもと るしあ", nameEn: "Rushia Yamamoto", generation: "", groupId: "morestar" },
        ],
    },
    // その他
    {
        id: "equal-love",
        name: "=LOVE",
        slug: "equal-love",
        color: "#F48FB1",
        icon: "/groups/equal-love.png",
        members: [
            { id: "el-otani-emiri", name: "大谷映美里", nameKana: "おおたに えみり", nameEn: "Emiri Otani", generation: "", groupId: "equal-love", birthday: "03-15" },
            { id: "el-oba-ami", name: "大場花菜", nameKana: "おおば はな", nameEn: "Hana Oba", generation: "", groupId: "equal-love", birthday: "02-04" },
            { id: "el-otoshima-risa", name: "音嶋莉沙", nameKana: "おとしま りさ", nameEn: "Risa Otoshima", generation: "", groupId: "equal-love", birthday: "08-11" },
            { id: "el-saitou-kiara", name: "齋藤樹愛羅", nameKana: "さいとう きあら", nameEn: "Kiara Saito", generation: "", groupId: "equal-love", birthday: "11-26" },
            { id: "el-sano-rena", name: "佐々木舞香", nameKana: "ささき まいか", nameEn: "Maika Sasaki", generation: "", groupId: "equal-love", birthday: "01-21" },
            { id: "el-takamatsu-hitomi", name: "高松瞳", nameKana: "たかまつ ひとみ", nameEn: "Hitomi Takamatsu", generation: "", groupId: "equal-love", birthday: "01-19" },
            { id: "el-takiwaki-shouko", name: "瀧脇笙古", nameKana: "たきわき しょうこ", nameEn: "Shouko Takiwaki", generation: "", groupId: "equal-love", birthday: "07-09" },
            { id: "el-noguchi-iori", name: "野口衣織", nameKana: "のぐち いおり", nameEn: "Iori Noguchi", generation: "", groupId: "equal-love", birthday: "04-26" },
            { id: "el-morohashi-sana", name: "諸橋沙夏", nameKana: "もろはし さな", nameEn: "Sana Morohashi", generation: "", groupId: "equal-love", birthday: "08-03" },
            { id: "el-yamamoto-anna", name: "山本杏奈", nameKana: "やまもと あんな", nameEn: "Anna Yamamoto", generation: "", groupId: "equal-love", birthday: "11-30" },
        ],
    },
    {
        id: "not-equal-me",
        name: "≠ME",
        slug: "not-equal-me",
        color: "#9575CD",
        icon: "/groups/not-equal-me.png",
        members: [
            { id: "nem-ogi-hana", name: "尾木波菜", nameKana: "おぎ はな", nameEn: "Hana Ogi", generation: "", groupId: "not-equal-me", birthday: "05-08" },
            { id: "nem-ochiai-senna", name: "落合希来里", nameKana: "おちあい きらり", nameEn: "Kirari Ochiai", generation: "", groupId: "not-equal-me", birthday: "05-22" },
            { id: "nem-kanisawa-moeko", name: "蟹沢萌子", nameKana: "かにさわ もえこ", nameEn: "Moeko Kanisawa", generation: "リーダー", groupId: "not-equal-me", birthday: "10-25" },
            { id: "nem-kawamura-arisa", name: "川村亜里沙", nameKana: "かわむら ありさ", nameEn: "Arisa Kawamura", generation: "", groupId: "not-equal-me", birthday: "10-22" },
            { id: "nem-kawanago-natsumi", name: "河口夏音", nameKana: "かわぐち なつね", nameEn: "Natsune Kawaguchi", generation: "", groupId: "not-equal-me", birthday: "07-29" },
            { id: "nem-kawanago-natsumi-2", name: "川中子奈月心", nameKana: "かわなご なつみ", nameEn: "Natsumi Kawanago", generation: "", groupId: "not-equal-me", birthday: "09-26" },
            { id: "nem-sakurai-momo", name: "櫻井もも", nameKana: "さくらい もも", nameEn: "Momo Sakurai", generation: "", groupId: "not-equal-me", birthday: "04-13" },
            { id: "nem-kirihara-moeka", name: "菅波美玲", nameKana: "すがなみ みれい", nameEn: "Mirei Suganami", generation: "", groupId: "not-equal-me", birthday: "02-05" },
            { id: "nem-suzuki-hitomi", name: "鈴木瞳美", nameKana: "すずき ひとみ", nameEn: "Hitomi Suzuki", generation: "", groupId: "not-equal-me", birthday: "04-13" },
            { id: "nem-tani-yuri", name: "谷崎早耶", nameKana: "たにざき さや", nameEn: "Saya Tanizaki", generation: "", groupId: "not-equal-me", birthday: "10-07" },
            { id: "nem-mitsui-aoi", name: "冨田菜々風", nameKana: "とみた ななか", nameEn: "Nanaka Tomita", generation: "", groupId: "not-equal-me", birthday: "07-17" },
            { id: "nem-nagayama-anna", name: "永田詩央里", nameKana: "ながた しおり", nameEn: "Shiori Nagata", generation: "", groupId: "not-equal-me", birthday: "04-02" },
            { id: "nem-honjou-yuzuha", name: "本城柚葉", nameKana: "ほんじょう ゆずは", nameEn: "Yuzuha Honjo", generation: "", groupId: "not-equal-me", birthday: "11-24" },
        ],
    },
    {
        id: "momoclo",
        name: "ももいろクローバーZ",
        slug: "momoclo",
        color: "#E91E63",
        icon: "/groups/momoclo.png",
        members: [
            { id: "mc-momota-kanako", name: "百田夏菜子", nameKana: "ももた かなこ", nameEn: "Kanako Momota", generation: "リーダー", groupId: "momoclo", birthday: "07-12" },
            { id: "mc-tamai-shiori", name: "玉井詩織", nameKana: "たまい しおり", nameEn: "Shiori Tamai", generation: "", groupId: "momoclo", birthday: "06-04" },
            { id: "mc-sasaki-ayaka", name: "佐々木彩夏", nameKana: "ささき あやか", nameEn: "Ayaka Sasaki", generation: "", groupId: "momoclo", birthday: "06-11" },
            { id: "mc-takagi-reni", name: "高城れに", nameKana: "たかぎ れに", nameEn: "Reni Takagi", generation: "", groupId: "momoclo", birthday: "06-21" },
        ],
    },
    {
        id: "perfume",
        name: "Perfume",
        slug: "perfume",
        color: "#E91E63",
        icon: "/groups/perfume.png",
        members: [
            { id: "pf-nocchi", name: "のっち", nameKana: "のっち", nameEn: "Nocchi", generation: "", groupId: "perfume", birthday: "09-20" },
            { id: "pf-kashiyuka", name: "かしゆか", nameKana: "かしゆか", nameEn: "Kashiyuka", generation: "", groupId: "perfume", birthday: "12-23" },
            { id: "pf-achan", name: "あ～ちゃん", nameKana: "あーちゃん", nameEn: "A-chan", generation: "", groupId: "perfume", birthday: "02-15" },
        ],
    },
    // 追加STARTO グループ
    {
        id: "kis-my-ft2",
        name: "Kis-My-Ft2",
        slug: "kis-my-ft2",
        color: "#2196F3",
        icon: "/groups/kis-my-ft2.png",
        members: [
            { id: "kmf-tamamori-yuta", name: "玉森裕太", nameKana: "たまもり ゆうた", nameEn: "Yuta Tamamori", generation: "", groupId: "kis-my-ft2", birthday: "03-17" },
            { id: "kmf-fujigaya-taisuke", name: "藤ヶ谷太輔", nameKana: "ふじがや たいすけ", nameEn: "Taisuke Fujigaya", generation: "", groupId: "kis-my-ft2", birthday: "06-25" },
            { id: "kmf-yokoo-wataru", name: "横尾渉", nameKana: "よこお わたる", nameEn: "Wataru Yokoo", generation: "", groupId: "kis-my-ft2", birthday: "05-16" },
            { id: "kmf-miyata-toshiya", name: "宮田俊哉", nameKana: "みやた としや", nameEn: "Toshiya Miyata", generation: "", groupId: "kis-my-ft2", birthday: "09-14" },
            { id: "kmf-nikaido-takashi", name: "二階堂高嗣", nameKana: "にかいどう たかし", nameEn: "Takashi Nikaido", generation: "", groupId: "kis-my-ft2", birthday: "08-06" },
            { id: "kmf-senga-kento", name: "千賀健永", nameKana: "せんが けんと", nameEn: "Kento Senga", generation: "", groupId: "kis-my-ft2", birthday: "03-23" },
        ],
    },
    {
        id: "timelesz",
        name: "timelesz",
        slug: "timelesz",
        color: "#C62828",
        icon: "/groups/timelesz.png",
        members: [
            { id: "tz-sato-shori", name: "佐藤勝利", nameKana: "さとう しょうり", nameEn: "Shori Sato", generation: "オリジナル", groupId: "timelesz", birthday: "10-30" },
            { id: "tz-kikuchi-fuma", name: "菊池風磨", nameKana: "きくち ふうま", nameEn: "Fuma Kikuchi", generation: "オリジナル", groupId: "timelesz", birthday: "03-07" },
            { id: "tz-matsushima-so", name: "松島聡", nameKana: "まつしま そう", nameEn: "So Matsushima", generation: "オリジナル", groupId: "timelesz", birthday: "11-27" },
            { id: "tz-teranishi-takuto", name: "寺西拓人", nameKana: "てらにし たくと", nameEn: "Takuto Teranishi", generation: "新メンバー", groupId: "timelesz", birthday: "04-02" },
            { id: "tz-hara-yoshitaka", name: "原嘉孝", nameKana: "はら よしたか", nameEn: "Yoshitaka Hara", generation: "新メンバー", groupId: "timelesz", birthday: "12-19" },
            { id: "tz-hashimoto-masaki", name: "橋本将生", nameKana: "はしもと まさき", nameEn: "Masaki Hashimoto", generation: "新メンバー", groupId: "timelesz", birthday: "04-29" },
            { id: "tz-inomata-shuto", name: "猪俣周杜", nameKana: "いのまた しゅうと", nameEn: "Shuto Inomata", generation: "新メンバー", groupId: "timelesz", birthday: "08-15" },
            { id: "tz-shinozuka-daiki", name: "篠塚大輝", nameKana: "しのづか だいき", nameEn: "Daiki Shinozuka", generation: "新メンバー", groupId: "timelesz", birthday: "01-18" },
        ],
    },
    {
        id: "heysayjump",
        name: "Hey! Say! JUMP",
        slug: "heysayjump",
        color: "#E91E63",
        icon: "/groups/heysayjump.png",
        members: [
            { id: "hsj-yamada-ryosuke", name: "山田涼介", nameKana: "やまだ りょうすけ", nameEn: "Ryosuke Yamada", generation: "", groupId: "heysayjump", birthday: "05-09" },
            { id: "hsj-chinen-yuri", name: "知念侑李", nameKana: "ちねん ゆうり", nameEn: "Yuri Chinen", generation: "", groupId: "heysayjump", birthday: "11-30" },
            { id: "hsj-arioka-daiki", name: "有岡大貴", nameKana: "ありおか だいき", nameEn: "Daiki Arioka", generation: "", groupId: "heysayjump", birthday: "04-15" },
            { id: "hsj-takaki-yuya", name: "髙木雄也", nameKana: "たかき ゆうや", nameEn: "Yuya Takaki", generation: "", groupId: "heysayjump", birthday: "03-26" },
            { id: "hsj-inoo-kei", name: "伊野尾慧", nameKana: "いのお けい", nameEn: "Kei Inoo", generation: "", groupId: "heysayjump", birthday: "06-22" },
            { id: "hsj-yaotome-hikaru", name: "八乙女光", nameKana: "やおとめ ひかる", nameEn: "Hikaru Yaotome", generation: "", groupId: "heysayjump", birthday: "12-02" },
            { id: "hsj-yabu-kota", name: "薮宏太", nameKana: "やぶ こうた", nameEn: "Kota Yabu", generation: "", groupId: "heysayjump", birthday: "01-31" },
        ],
    },
];

// グループIDからグループを取得
export function getGroupById(groupId: string): Group | undefined {
    return groups.find((g) => g.id === groupId || g.slug === groupId);
}

// メンバーIDからメンバーを取得
export function getMemberById(memberId: string): Member | undefined {
    for (const group of groups) {
        const member = group.members.find((m) => m.id === memberId);
        if (member) return member;
    }
    return undefined;
}

// 全メンバーを取得
export function getAllMembers(): (Member & { groupName: string; groupColor: string })[] {
    const allMembers: (Member & { groupName: string; groupColor: string })[] = [];
    for (const group of groups) {
        for (const member of group.members) {
            allMembers.push({
                ...member,
                groupName: group.name,
                groupColor: group.color,
            });
        }
    }
    return allMembers;
}

// イニシャルを取得
export function getInitial(name: string): string {
    return name.charAt(0);
}

// 今月が誕生月かチェック
export function isBirthdayMonth(birthday?: string): boolean {
    if (!birthday) return false;
    const currentMonth = new Date().getMonth() + 1;
    const birthMonth = parseInt(birthday.split("-")[0], 10);
    return currentMonth === birthMonth;
}

// 指定月の誕生日メンバーを取得
export function getMembersByBirthMonth(month: number): Member[] {
    const allMembers = getAllMembers();
    return allMembers.filter(member => {
        if (!member.birthday) return false;
        const birthMonth = parseInt(member.birthday.split("-")[0], 10);
        return birthMonth === month;
    });
}
