/**
 * base data2 data
 * Created by yk on 2016/8/9.
 */
"use strict"

//test file code
/*const fs = require("fs")
 var require = (path)=>{
 fs.exists(path, (e) => {
 if (!e) {
 console.log(path)
 }
 })
 }*/

exports.getHeroData = (id) => {
    return heroData[id]
}
exports.getItemData = (id) => {
    return itemData[id]
}


const heroData = {
    "1": {
        "id": 1,
        "name": "敌法师",
        "icon": require('../images/hero/hero_1.png')
    },
    "2": {
        "id": 2,
        "name": "斧王",
        "icon": require('../images/hero/hero_2.png')
    },
    "3": {
        "id": 3,
        "name": "祸乱之源",
        "icon": require('../images/hero/hero_3.png')
    },
    "4": {
        "id": 4,
        "name": "嗜血狂魔",
        "icon": require('../images/hero/hero_4.png')
    },
    "5": {
        "id": 5,
        "name": "水晶室女",
        "icon": require('../images/hero/hero_5.png')
    },
    "6": {
        "id": 6,
        "name": "卓尔游侠",
        "icon": require('../images/hero/hero_6.png')
    },
    "7": {
        "id": 7,
        "name": "撼地者",
        "icon": require('../images/hero/hero_7.png')
    },
    "8": {
        "id": 8,
        "name": "主宰",
        "icon": require('../images/hero/hero_8.png')
    },
    "9": {
        "id": 9,
        "name": "米拉娜",
        "icon": require('../images/hero/hero_9.png')
    },
    "10": {
        "id": 10,
        "name": "变体精灵",
        "icon": require('../images/hero/hero_10.png')
    },
    "11": {
        "id": 11,
        "name": "影魔",
        "icon": require('../images/hero/hero_11.png')
    },
    "12": {
        "id": 12,
        "name": "幻影长矛手",
        "icon": require('../images/hero/hero_12.png')
    },
    "13": {
        "id": 13,
        "name": "帕克",
        "icon": require('../images/hero/hero_13.png')
    },
    "14": {
        "id": 14,
        "name": "帕吉",
        "icon": require('../images/hero/hero_14.png')
    },
    "15": {
        "id": 15,
        "name": "剃刀",
        "icon": require('../images/hero/hero_15.png')
    },
    "16": {
        "id": 16,
        "name": "沙王",
        "icon": require('../images/hero/hero_16.png')
    },
    "17": {
        "id": 17,
        "name": "风暴之灵",
        "icon": require('../images/hero/hero_17.png')
    },
    "18": {
        "id": 18,
        "name": "斯温",
        "icon": require('../images/hero/hero_18.png')
    },
    "19": {
        "id": 19,
        "name": "小小",
        "icon": require('../images/hero/hero_19.png')
    },
    "20": {
        "id": 20,
        "name": "复仇之魂",
        "icon": require('../images/hero/hero_20.png')
    },
    "21": {
        "id": 21,
        "name": "风行者",
        "icon": require('../images/hero/hero_21.png')
    },
    "22": {
        "id": 22,
        "name": "宙斯",
        "icon": require('../images/hero/hero_22.png')
    },
    "23": {
        "id": 23,
        "name": "昆卡",
        "icon": require('../images/hero/hero_23.png')
    },
    "25": {
        "id": 25,
        "name": "莉娜",
        "icon": require('../images/hero/hero_25.png')
    },
    "26": {
        "id": 26,
        "name": "莱恩",
        "icon": require('../images/hero/hero_26.png')
    },
    "27": {
        "id": 27,
        "name": "暗影萨满",
        "icon": require('../images/hero/hero_27.png')
    },
    "28": {
        "id": 28,
        "name": "斯拉达",
        "icon": require('../images/hero/hero_28.png')
    },
    "29": {
        "id": 29,
        "name": "潮汐猎人",
        "icon": require('../images/hero/hero_29.png')
    },
    "30": {
        "id": 30,
        "name": "巫医",
        "icon": require('../images/hero/hero_30.png')
    },
    "31": {
        "id": 31,
        "name": "巫妖",
        "icon": require('../images/hero/hero_31.png')
    },
    "32": {
        "id": 32,
        "name": "力丸",
        "icon": require('../images/hero/hero_32.png')
    },
    "33": {
        "id": 33,
        "name": "谜团",
        "icon": require('../images/hero/hero_33.png')
    },
    "34": {
        "id": 34,
        "name": "修补匠",
        "icon": require('../images/hero/hero_34.png')
    },
    "35": {
        "id": 35,
        "name": "狙击手",
        "icon": require('../images/hero/hero_35.png')
    },
    "36": {
        "id": 36,
        "name": "瘟疫法师",
        "icon": require('../images/hero/hero_36.png')
    },
    "37": {
        "id": 37,
        "name": "术士",
        "icon": require('../images/hero/hero_37.png')
    },
    "38": {
        "id": 38,
        "name": "兽王",
        "icon": require('../images/hero/hero_38.png')
    },
    "39": {
        "id": 39,
        "name": "痛苦女王",
        "icon": require('../images/hero/hero_39.png')
    },
    "40": {
        "id": 40,
        "name": "剧毒术士",
        "icon": require('../images/hero/hero_40.png')
    },
    "41": {
        "id": 41,
        "name": "虚空假面",
        "icon": require('../images/hero/hero_41.png')
    },
    "42": {
        "id": 42,
        "name": "冥魂大帝",
        "icon": require('../images/hero/hero_42.png')
    },
    "43": {
        "id": 43,
        "name": "死亡先知",
        "icon": require('../images/hero/hero_43.png')
    },
    "44": {
        "id": 44,
        "name": "幻影刺客",
        "icon": require('../images/hero/hero_44.png')
    },
    "45": {
        "id": 45,
        "name": "帕格纳",
        "icon": require('../images/hero/hero_45.png')
    },
    "46": {
        "id": 46,
        "name": "圣堂刺客",
        "icon": require('../images/hero/hero_46.png')
    },
    "47": {
        "id": 47,
        "name": "冥界亚龙",
        "icon": require('../images/hero/hero_47.png')
    },
    "48": {
        "id": 48,
        "name": "露娜",
        "icon": require('../images/hero/hero_48.png')
    },
    "49": {
        "id": 49,
        "name": "龙骑士",
        "icon": require('../images/hero/hero_49.png')
    },
    "50": {
        "id": 50,
        "name": "戴泽",
        "icon": require('../images/hero/hero_50.png')
    },
    "51": {
        "id": 51,
        "name": "发条技师",
        "icon": require('../images/hero/hero_51.png')
    },
    "52": {
        "id": 52,
        "name": "拉席克",
        "icon": require('../images/hero/hero_52.png')
    },
    "53": {
        "id": 53,
        "name": "先知",
        "icon": require('../images/hero/hero_53.png')
    },
    "54": {
        "id": 54,
        "name": "噬魂鬼",
        "icon": require('../images/hero/hero_54.png')
    },
    "55": {
        "id": 55,
        "name": "黑暗贤者",
        "icon": require('../images/hero/hero_55.png')
    },
    "56": {
        "id": 56,
        "name": "克林克兹",
        "icon": require('../images/hero/hero_56.png')
    },
    "57": {
        "id": 57,
        "name": "全能骑士",
        "icon": require('../images/hero/hero_57.png')
    },
    "58": {
        "id": 58,
        "name": "魅惑魔女",
        "icon": require('../images/hero/hero_58.png')
    },
    "59": {
        "id": 59,
        "name": "哈斯卡",
        "icon": require('../images/hero/hero_59.png')
    },
    "60": {
        "id": 60,
        "name": "暗夜魔王",
        "icon": require('../images/hero/hero_60.png')
    },
    "61": {
        "id": 61,
        "name": "育母蜘蛛",
        "icon": require('../images/hero/hero_61.png')
    },
    "62": {
        "id": 62,
        "name": "赏金猎人",
        "icon": require('../images/hero/hero_62.png')
    },
    "63": {
        "id": 63,
        "name": "编织者",
        "icon": require('../images/hero/hero_63.png')
    },
    "64": {
        "id": 64,
        "name": "杰奇洛",
        "icon": require('../images/hero/hero_64.png')
    },
    "65": {
        "id": 65,
        "name": "蝙蝠骑士",
        "icon": require('../images/hero/hero_65.png')
    },
    "66": {
        "id": 66,
        "name": "陈",
        "icon": require('../images/hero/hero_66.png')
    },
    "67": {
        "id": 67,
        "name": "幽鬼",
        "icon": require('../images/hero/hero_67.png')
    },
    "68": {
        "id": 68,
        "name": "远古冰魄",
        "icon": require('../images/hero/hero_68.png')
    },
    "69": {
        "id": 69,
        "name": "末日使者",
        "icon": require('../images/hero/hero_69.png')
    },
    "70": {
        "id": 70,
        "name": "熊战士",
        "icon": require('../images/hero/hero_70.png')
    },
    "71": {
        "id": 71,
        "name": "裂魂人",
        "icon": require('../images/hero/hero_71.png')
    },
    "72": {
        "id": 72,
        "name": "矮人直升机",
        "icon": require('../images/hero/hero_72.png')
    },
    "73": {
        "id": 73,
        "name": "炼金术士",
        "icon": require('../images/hero/hero_73.png')
    },
    "74": {
        "id": 74,
        "name": "祈求者",
        "icon": require('../images/hero/hero_74.png')
    },
    "75": {
        "id": 75,
        "name": "沉默术士",
        "icon": require('../images/hero/hero_75.png')
    },
    "76": {
        "id": 76,
        "name": "殁境神蚀者",
        "icon": require('../images/hero/hero_76.png')
    },
    "77": {
        "id": 77,
        "name": "狼人",
        "icon": require('../images/hero/hero_77.png')
    },
    "78": {
        "id": 78,
        "name": "酒仙",
        "icon": require('../images/hero/hero_78.png')
    },
    "79": {
        "id": 79,
        "name": "暗影恶魔",
        "icon": require('../images/hero/hero_79.png')
    },
    "80": {
        "id": 80,
        "name": "德鲁伊",
        "icon": require('../images/hero/hero_80.png')
    },
    "81": {
        "id": 81,
        "name": "混沌骑士",
        "icon": require('../images/hero/hero_81.png')
    },
    "82": {
        "id": 82,
        "name": "米波",
        "icon": require('../images/hero/hero_82.png')
    },
    "83": {
        "id": 83,
        "name": "树精卫士",
        "icon": require('../images/hero/hero_83.png')
    },
    "84": {
        "id": 84,
        "name": "食人魔魔法师",
        "icon": require('../images/hero/hero_84.png')
    },
    "85": {
        "id": 85,
        "name": "不朽尸王",
        "icon": require('../images/hero/hero_85.png')
    },
    "86": {
        "id": 86,
        "name": "拉比克",
        "icon": require('../images/hero/hero_86.png')
    },
    "87": {
        "id": 87,
        "name": "干扰者",
        "icon": require('../images/hero/hero_87.png')
    },
    "88": {
        "id": 88,
        "name": "司夜刺客",
        "icon": require('../images/hero/hero_88.png')
    },
    "89": {
        "id": 89,
        "name": "娜迦海妖",
        "icon": require('../images/hero/hero_89.png')
    },
    "90": {
        "id": 90,
        "name": "光之守卫",
        "icon": require('../images/hero/hero_90.png')
    },
    "91": {
        "id": 91,
        "name": "艾欧",
        "icon": require('../images/hero/hero_91.png')
    },
    "92": {
        "id": 92,
        "name": "维萨吉",
        "icon": require('../images/hero/hero_92.png')
    },
    "93": {
        "id": 93,
        "name": "斯拉克",
        "icon": require('../images/hero/hero_93.png')
    },
    "94": {
        "id": 94,
        "name": "美杜莎",
        "icon": require('../images/hero/hero_94.png')
    },
    "95": {
        "id": 95,
        "name": "巨魔战将",
        "icon": require('../images/hero/hero_95.png')
    },
    "96": {
        "id": 96,
        "name": "半人马战行者",
        "icon": require('../images/hero/hero_96.png')
    },
    "97": {
        "id": 97,
        "name": "马格纳斯",
        "icon": require('../images/hero/hero_97.png')
    },
    "98": {
        "id": 98,
        "name": "伐木机",
        "icon": require('../images/hero/hero_98.png')
    },
    "99": {
        "id": 99,
        "name": "钢背兽",
        "icon": require('../images/hero/hero_99.png')
    },
    "100": {
        "id": 100,
        "name": "巨牙海民",
        "icon": require('../images/hero/hero_100.png')
    },
    "101": {
        "id": 101,
        "name": "天怒法师",
        "icon": require('../images/hero/hero_101.png')
    },
    "102": {
        "id": 102,
        "name": "亚巴顿",
        "icon": require('../images/hero/hero_102.png')
    },
    "103": {
        "id": 103,
        "name": "上古巨神",
        "icon": require('../images/hero/hero_103.png')
    },
    "104": {
        "id": 104,
        "name": "军团指挥官",
        "icon": require('../images/hero/hero_104.png')
    },
    "105": {
        "id": 105,
        "name": "工程师",
        "icon": require('../images/hero/hero_105.png')
    },
    "106": {
        "id": 106,
        "name": "灰烬之灵",
        "icon": require('../images/hero/hero_106.png')
    },
    "107": {
        "id": 107,
        "name": "大地之灵",
        "icon": require('../images/hero/hero_107.png')
    },
    "109": {
        "id": 109,
        "name": "恐怖利刃",
        "icon": require('../images/hero/hero_109.png')
    },
    "110": {
        "id": 110,
        "name": "凤凰",
        "icon": require('../images/hero/hero_110.png')
    },
    "111": {
        "id": 111,
        "name": "神谕者",
        "icon": require('../images/hero/hero_111.png')
    },
    "112": {
        "id": 112,
        "name": "寒冬飞龙",
        "icon": require('../images/hero/hero_112.png')
    },
    "113": {
        "id": 113,
        "name": "天穹守望者",
        "icon": require('../images/hero/hero_113.png')
    }
}

const itemData = {
    "0": {
        "id": 0,
        "name": "",
        "icon": require('../images/item/item_0.png')
    },
    "1": {
        "id": 1,
        "name": "闪烁匕首",
        "icon": require('../images/item/item_1.png')
    },
    "2": {
        "id": 2,
        "name": "攻击之爪",
        "icon": require('../images/item/item_2.png')
    },
    "3": {
        "id": 3,
        "name": "阔剑",
        "icon": require('../images/item/item_3.png')
    },
    "4": {
        "id": 4,
        "name": "锁子甲",
        "icon": require('../images/item/item_4.png')
    },
    "5": {
        "id": 5,
        "name": "大剑",
        "icon": require('../images/item/item_5.png')
    },
    "6": {
        "id": 6,
        "name": "铁意头盔",
        "icon": require('../images/item/item_6.png')
    },
    "7": {
        "id": 7,
        "name": "标枪",
        "icon": require('../images/item/item_7.png')
    },
    "8": {
        "id": 8,
        "name": "秘银锤",
        "icon": require('../images/item/item_8.png')
    },
    "9": {
        "id": 9,
        "name": "板甲",
        "icon": require('../images/item/item_9.png')
    },
    "10": {
        "id": 10,
        "name": "短棍",
        "icon": require('../images/item/item_10.png')
    },
    "11": {
        "id": 11,
        "name": "压制之刃",
        "icon": require('../images/item/item_11.png')
    },
    "12": {
        "id": 12,
        "name": "守护指环",
        "icon": require('../images/item/item_12.png')
    },
    "13": {
        "id": 13,
        "name": "力量手套",
        "icon": require('../images/item/item_13.png')
    },
    "14": {
        "id": 14,
        "name": "敏捷便鞋",
        "icon": require('../images/item/item_14.png')
    },
    "15": {
        "id": 15,
        "name": "智力斗篷",
        "icon": require('../images/item/item_15.png')
    },
    "16": {
        "id": 16,
        "name": "铁树枝干",
        "icon": require('../images/item/item_16.png')
    },
    "17": {
        "id": 17,
        "name": "力量腰带",
        "icon": require('../images/item/item_17.png')
    },
    "18": {
        "id": 18,
        "name": "精灵布带",
        "icon": require('../images/item/item_18.png')
    },
    "19": {
        "id": 19,
        "name": "法师长袍",
        "icon": require('../images/item/item_19.png')
    },
    "20": {
        "id": 20,
        "name": "圆环",
        "icon": require('../images/item/item_20.png')
    },
    "21": {
        "id": 21,
        "name": "食人魔之斧",
        "icon": require('../images/item/item_21.png')
    },
    "22": {
        "id": 22,
        "name": "欢欣之刃",
        "icon": require('../images/item/item_22.png')
    },
    "23": {
        "id": 23,
        "name": "魔力法杖",
        "icon": require('../images/item/item_23.png')
    },
    "24": {
        "id": 24,
        "name": "极限法球",
        "icon": require('../images/item/item_24.png')
    },
    "25": {
        "id": 25,
        "name": "加速手套",
        "icon": require('../images/item/item_25.png')
    },
    "26": {
        "id": 26,
        "name": "吸血面具",
        "icon": require('../images/item/item_26.png')
    },
    "27": {
        "id": 27,
        "name": "回复戒指",
        "icon": require('../images/item/item_27.png')
    },
    "28": {
        "id": 28,
        "name": "贤者面罩",
        "icon": require('../images/item/item_28.png')
    },
    "29": {
        "id": 29,
        "name": "速度之靴",
        "icon": require('../images/item/item_29.png')
    },
    "30": {
        "id": 30,
        "name": "真视宝石",
        "icon": require('../images/item/item_30.png')
    },
    "31": {
        "id": 31,
        "name": "抗魔斗篷",
        "icon": require('../images/item/item_31.png')
    },
    "32": {
        "id": 32,
        "name": "闪避护符",
        "icon": require('../images/item/item_32.png')
    },
    "33": {
        "id": 33,
        "name": "奶酪",
        "icon": require('../images/item/item_33.png')
    },
    "34": {
        "id": 34,
        "name": "魔棒",
        "icon": require('../images/item/item_34.png')
    },
    "35": {
        "id": 35,
        "name": "卷轴：魔杖",
        "icon": require('../images/item/item_35.png')
    },
    "36": {
        "id": 36,
        "name": "魔杖",
        "icon": require('../images/item/item_35.png')
    },
    "37": {
        "id": 37,
        "name": "幽魂权杖",
        "icon": require('../images/item/item_37.png')
    },
    "38": {
        "id": 38,
        "name": "净化药水",
        "icon": require('../images/item/item_38.png')
    },
    "39": {
        "id": 39,
        "name": "治疗药膏",
        "icon": require('../images/item/item_39.png')
    },
    "40": {
        "id": 40,
        "name": "显影之尘",
        "icon": require('../images/item/item_40.png')
    },
    "41": {
        "id": 41,
        "name": "魔瓶",
        "icon": require('../images/item/item_41.png')
    },
    "42": {
        "id": 42,
        "name": "侦查守卫",
        "icon": require('../images/item/item_42.png')
    },
    "43": {
        "id": 43,
        "name": "岗哨守卫",
        "icon": require('../images/item/item_43.png')
    },
    "44": {
        "id": 44,
        "name": "树之祭祀",
        "icon": require('../images/item/item_44.png')
    },
    "45": {
        "id": 45,
        "name": "动物信使",
        "icon": require('../images/item/item_45.png')
    },
    "46": {
        "id": 46,
        "name": "回城卷轴",
        "icon": require('../images/item/item_46.png')
    },
    "47": {
        "id": 47,
        "name": "卷轴：远行鞋",
        "icon": require('../images/item/item_47.png')
    },
    "48": {
        "id": 48,
        "name": "远行鞋",
        "icon": require('../images/item/item_47.png')
    },
    "49": {
        "id": 49,
        "name": "卷轴：相位鞋",
        "icon": require('../images/item/item_49.png')
    },
    "50": {
        "id": 50,
        "name": "相位鞋",
        "icon": require('../images/item/item_49.png')
    },
    "51": {
        "id": 51,
        "name": "恶魔刀锋",
        "icon": require('../images/item/item_51.png')
    },
    "52": {
        "id": 52,
        "name": "鹰歌弓",
        "icon": require('../images/item/item_52.png')
    },
    "53": {
        "id": 53,
        "name": "掠夺者之斧",
        "icon": require('../images/item/item_53.png')
    },
    "54": {
        "id": 54,
        "name": "圣者遗物",
        "icon": require('../images/item/item_54.png')
    },
    "55": {
        "id": 55,
        "name": "振奋宝石",
        "icon": require('../images/item/item_55.png')
    },
    "56": {
        "id": 56,
        "name": "治疗指环",
        "icon": require('../images/item/item_56.png')
    },
    "57": {
        "id": 57,
        "name": "虚无宝石",
        "icon": require('../images/item/item_57.png')
    },
    "58": {
        "id": 58,
        "name": "神秘法杖",
        "icon": require('../images/item/item_58.png')
    },
    "59": {
        "id": 59,
        "name": "能量之球",
        "icon": require('../images/item/item_59.png')
    },
    "60": {
        "id": 60,
        "name": "精气之球",
        "icon": require('../images/item/item_60.png')
    },
    "61": {
        "id": 61,
        "name": "活力之球",
        "icon": require('../images/item/item_61.png')
    },
    "62": {
        "id": 62,
        "name": "卷轴：动力鞋",
        "icon": require('../images/item/item_62.png')
    },
    "63": {
        "id": 63,
        "name": "动力鞋",
        "icon": require('../images/item/item_62.png')
    },
    "64": {
        "id": 64,
        "name": "卷轴：迈达斯之手",
        "icon": require('../images/item/item_64.png')
    },
    "65": {
        "id": 65,
        "name": "迈达斯之手",
        "icon": require('../images/item/item_64.png')
    },
    "66": {
        "id": 66,
        "name": "卷轴：空明杖",
        "icon": require('../images/item/item_66.png')
    },
    "67": {
        "id": 67,
        "name": "空明杖",
        "icon": require('../images/item/item_66.png')
    },
    "68": {
        "id": 68,
        "name": "卷轴：坚韧球",
        "icon": require('../images/item/item_69.png')
    },
    "69": {
        "id": 69,
        "name": "坚韧球",
        "icon": require('../images/item/item_69.png')
    },
    "70": {
        "id": 70,
        "name": "卷轴：穷鬼盾",
        "icon": require('../images/item/item_70.png')
    },
    "71": {
        "id": 71,
        "name": "穷鬼盾",
        "icon": require('../images/item/item_71.png')
    },
    "72": {
        "id": 72,
        "name": "卷轴：护腕",
        "icon": require('../images/item/item_72.png')
    },
    "73": {
        "id": 73,
        "name": "护腕",
        "icon": require('../images/item/item_72.png')
    },
    "74": {
        "id": 74,
        "name": "卷轴：怨灵系带",
        "icon": require('../images/item/item_74.png')
    },
    "75": {
        "id": 75,
        "name": "怨灵系带",
        "icon": require('../images/item/item_74.png')
    },
    "76": {
        "id": 76,
        "name": "卷轴：空灵挂件",
        "icon": require('../images/item/item_77.png')
    },
    "77": {
        "id": 77,
        "name": "空灵挂件",
        "icon": require('../images/item/item_77.png')
    },
    "78": {
        "id": 78,
        "name": "卷轴：梅肯斯姆",
        "icon": require('../images/item/item_79.png')
    },
    "79": {
        "id": 79,
        "name": "梅肯斯姆",
        "icon": require('../images/item/item_79.png')
    },
    "80": {
        "id": 80,
        "name": "卷轴：弗拉迪米尔的祭品",
        "icon": require('../images/item/item_81.png')
    },
    "81": {
        "id": 81,
        "name": "弗拉迪米尔的祭品",
        "icon": require('../images/item/item_81.png')
    },
    "84": {
        "id": 84,
        "name": "飞行信使",
        "icon": require('../images/item/item_84.png')
    },
    "85": {
        "id": 85,
        "name": "卷轴：玄冥盾牌",
        "icon": require('../images/item/item_85.png')
    },
    "86": {
        "id": 86,
        "name": "玄冥盾牌",
        "icon": require('../images/item/item_85.png')
    },
    "87": {
        "id": 87,
        "name": "卷轴：王者之戒",
        "icon": require('../images/item/item_87.png')
    },
    "88": {
        "id": 88,
        "name": "王者之戒",
        "icon": require('../images/item/item_87.png')
    },
    "89": {
        "id": 89,
        "name": "卷轴：洞察烟斗",
        "icon": require('../images/item/item_89.png')
    },
    "90": {
        "id": 90,
        "name": "洞察烟斗",
        "icon": require('../images/item/item_89.png')
    },
    "91": {
        "id": 91,
        "name": "卷轴：影之灵龛",
        "icon": require('../images/item/item_91.png')
    },
    "92": {
        "id": 92,
        "name": "影之灵龛",
        "icon": require('../images/item/item_91.png')
    },
    "93": {
        "id": 93,
        "name": "卷轴：恢复头巾",
        "icon": require('../images/item/item_93.png')
    },
    "94": {
        "id": 94,
        "name": "恢复头巾",
        "icon": require('../images/item/item_93.png')
    },
    "95": {
        "id": 95,
        "name": "卷轴：邪恶镰刀",
        "icon": require('../images/item/item_95.png')
    },
    "96": {
        "id": 96,
        "name": "邪恶镰刀",
        "icon": require('../images/item/item_95.png')
    },
    "97": {
        "id": 97,
        "name": "卷轴：紫怨",
        "icon": require('../images/item/item_98.png')
    },
    "98": {
        "id": 98,
        "name": "紫怨",
        "icon": require('../images/item/item_98.png')
    },
    "99": {
        "id": 99,
        "name": "卷轴：Eul的神圣法杖",
        "icon": require('../images/item/item_100.png')
    },
    "100": {
        "id": 100,
        "name": "Eul的神圣法杖",
        "icon": require('../images/item/item_100.png')
    },
    "101": {
        "id": 101,
        "name": "卷轴：原力法杖",
        "icon": require('../images/item/item_101.png')
    },
    "102": {
        "id": 102,
        "name": "原力法杖",
        "icon": require('../images/item/item_101.png')
    },
    "103": {
        "id": 103,
        "name": "卷轴：达贡之神力",
        "icon": require('../images/item/item_201.png')
    },
    "104": {
        "id": 104,
        "name": "达贡之神力",
        "icon": require('../images/item/item_201.png')
    },
    "105": {
        "id": 105,
        "name": "卷轴：死灵书",
        "icon": require('../images/item/item_105.png')
    },
    "106": {
        "id": 106,
        "name": "死灵书",
        "icon": require('../images/item/item_106.png')
    },
    "107": {
        "id": 107,
        "name": "卷轴：阿哈利姆神杖",
        "icon": require('../images/item/item_107.png')
    },
    "108": {
        "id": 108,
        "name": "阿哈利姆神杖",
        "icon": require('../images/item/item_107.png')
    },
    "109": {
        "id": 109,
        "name": "卷轴：刷新球",
        "icon": require('../images/item/item_109.png')
    },
    "110": {
        "id": 110,
        "name": "刷新球",
        "icon": require('../images/item/item_109.png')
    },
    "111": {
        "id": 111,
        "name": "卷轴：强袭胸甲",
        "icon": require('../images/item/item_111.png')
    },
    "112": {
        "id": 112,
        "name": "强袭胸甲",
        "icon": require('../images/item/item_111.png')
    },
    "113": {
        "id": 113,
        "name": "卷轴：恐鳌之心",
        "icon": require('../images/item/item_113.png')
    },
    "114": {
        "id": 114,
        "name": "恐鳌之心",
        "icon": require('../images/item/item_113.png')
    },
    "115": {
        "id": 115,
        "name": "卷轴：黑皇杖",
        "icon": require('../images/item/item_115.png')
    },
    "116": {
        "id": 116,
        "name": "黑皇杖",
        "icon": require('../images/item/item_115.png')
    },
    "117": {
        "id": 117,
        "name": "不朽之守护",
        "icon": require('../images/item/item_117.png')
    },
    "118": {
        "id": 118,
        "name": "卷轴：希瓦的守护",
        "icon": require('../images/item/item_118.png')
    },
    "119": {
        "id": 119,
        "name": "希瓦的守护",
        "icon": require('../images/item/item_118.png')
    },
    "120": {
        "id": 120,
        "name": "卷轴：血精石",
        "icon": require('../images/item/item_120.png')
    },
    "121": {
        "id": 121,
        "name": "血精石",
        "icon": require('../images/item/item_120.png')
    },
    "122": {
        "id": 122,
        "name": "卷轴：林肯法球",
        "icon": require('../images/item/item_122.png')
    },
    "123": {
        "id": 123,
        "name": "林肯法球",
        "icon": require('../images/item/item_122.png')
    },
    "124": {
        "id": 124,
        "name": "卷轴：先锋盾",
        "icon": require('../images/item/item_124.png')
    },
    "125": {
        "id": 125,
        "name": "先锋盾",
        "icon": require('../images/item/item_124.png')
    },
    "126": {
        "id": 126,
        "name": "卷轴：刃甲",
        "icon": require('../images/item/item_127.png')
    },
    "127": {
        "id": 127,
        "name": "刃甲",
        "icon": require('../images/item/item_127.png')
    },
    "128": {
        "id": 128,
        "name": "卷轴：振魂石",
        "icon": require('../images/item/item_128.png')
    },
    "129": {
        "id": 129,
        "name": "振魂石",
        "icon": require('../images/item/item_129.png')
    },
    "130": {
        "id": 130,
        "name": "卷轴：挑战头巾",
        "icon": require('../images/item/item_131.png')
    },
    "131": {
        "id": 131,
        "name": "挑战头巾",
        "icon": require('../images/item/item_131.png')
    },
    "132": {
        "id": 132,
        "name": "卷轴：圣剑",
        "icon": require('../images/item/item_132.png')
    },
    "133": {
        "id": 133,
        "name": "圣剑",
        "icon": require('../images/item/item_132.png')
    },
    "134": {
        "id": 134,
        "name": "卷轴：金箍棒",
        "icon": require('../images/item/item_134.png')
    },
    "135": {
        "id": 135,
        "name": "金箍棒",
        "icon": require('../images/item/item_134.png')
    },
    "136": {
        "id": 136,
        "name": "卷轴：辉耀",
        "icon": require('../images/item/item_136.png')
    },
    "137": {
        "id": 137,
        "name": "辉耀",
        "icon": require('../images/item/item_136.png')
    },
    "138": {
        "id": 138,
        "name": "卷轴：蝴蝶",
        "icon": require('../images/item/item_138.png')
    },
    "139": {
        "id": 139,
        "name": "蝴蝶",
        "icon": require('../images/item/item_138.png')
    },
    "140": {
        "id": 140,
        "name": "卷轴：代达罗斯之殇",
        "icon": require('../images/item/item_140.png')
    },
    "141": {
        "id": 141,
        "name": "代达罗斯之殇",
        "icon": require('../images/item/item_140.png')
    },
    "142": {
        "id": 142,
        "name": "卷轴：碎颅锤",
        "icon": require('../images/item/item_142.png')
    },
    "143": {
        "id": 143,
        "name": "碎颅锤",
        "icon": require('../images/item/item_142.png')
    },
    "144": {
        "id": 144,
        "name": "卷轴：狂战斧",
        "icon": require('../images/item/item_144.png')
    },
    "145": {
        "id": 145,
        "name": "狂战斧",
        "icon": require('../images/item/item_144.png')
    },
    "146": {
        "id": 146,
        "name": "卷轴：幻影斧",
        "icon": require('../images/item/item_146.png')
    },
    "147": {
        "id": 147,
        "name": "幻影斧",
        "icon": require('../images/item/item_146.png')
    },
    "148": {
        "id": 148,
        "name": "卷轴：水晶剑",
        "icon": require('../images/item/item_148.png')
    },
    "149": {
        "id": 149,
        "name": "水晶剑",
        "icon": require('../images/item/item_148.png')
    },
    "150": {
        "id": 150,
        "name": "卷轴：莫尔迪基安的臂章",
        "icon": require('../images/item/item_150.png')
    },
    "151": {
        "id": 151,
        "name": "莫尔迪基安的臂章",
        "icon": require('../images/item/item_150.png')
    },
    "152": {
        "id": 152,
        "name": "影刃",
        "icon": require('../images/item/item_152.png')
    },
    "153": {
        "id": 153,
        "name": "卷轴：散夜对剑",
        "icon": require('../images/item/item_153.png')
    },
    "154": {
        "id": 154,
        "name": "散夜对剑",
        "icon": require('../images/item/item_154.png')
    },
    "155": {
        "id": 155,
        "name": "卷轴：撒旦之邪力",
        "icon": require('../images/item/item_155.png')
    },
    "156": {
        "id": 156,
        "name": "撒旦之邪力",
        "icon": require('../images/item/item_156.png')
    },
    "157": {
        "id": 157,
        "name": "卷轴：雷神之锤",
        "icon": require('../images/item/item_157.png')
    },
    "158": {
        "id": 158,
        "name": "雷神之锤",
        "icon": require('../images/item/item_157.png')
    },
    "159": {
        "id": 159,
        "name": "卷轴：斯嘉蒂之眼",
        "icon": require('../images/item/item_159.png')
    },
    "160": {
        "id": 160,
        "name": "斯嘉蒂之眼",
        "icon": require('../images/item/item_159.png')
    },
    "161": {
        "id": 161,
        "name": "卷轴：散华",
        "icon": require('../images/item/item_162.png')
    },
    "162": {
        "id": 162,
        "name": "散华",
        "icon": require('../images/item/item_162.png')
    },
    "163": {
        "id": 163,
        "name": "卷轴：支配头盔",
        "icon": require('../images/item/item_164.png')
    },
    "164": {
        "id": 164,
        "name": "支配头盔",
        "icon": require('../images/item/item_164.png')
    },
    "165": {
        "id": 165,
        "name": "卷轴：漩涡",
        "icon": require('../images/item/item_165.png')
    },
    "166": {
        "id": 166,
        "name": "漩涡",
        "icon": require('../images/item/item_165.png')
    },
    "167": {
        "id": 167,
        "name": "卷轴：黯灭",
        "icon": require('../images/item/item_167.png')
    },
    "168": {
        "id": 168,
        "name": "黯灭",
        "icon": require('../images/item/item_168.png')
    },
    "169": {
        "id": 169,
        "name": "卷轴：夜叉",
        "icon": require('../images/item/item_170.png')
    },
    "170": {
        "id": 170,
        "name": "夜叉",
        "icon": require('../images/item/item_170.png')
    },
    "171": {
        "id": 171,
        "name": "卷轴：疯狂面具",
        "icon": require('../images/item/item_171.png')
    },
    "172": {
        "id": 172,
        "name": "疯狂面具",
        "icon": require('../images/item/item_171.png')
    },
    "173": {
        "id": 173,
        "name": "卷轴：净魂之刃",
        "icon": require('../images/item/item_174.png')
    },
    "174": {
        "id": 174,
        "name": "净魂之刃",
        "icon": require('../images/item/item_174.png')
    },
    "175": {
        "id": 175,
        "name": "卷轴：虚灵之刃",
        "icon": require('../images/item/item_175.png')
    },
    "176": {
        "id": 176,
        "name": "虚灵之刃",
        "icon": require('../images/item/item_175.png')
    },
    "177": {
        "id": 177,
        "name": "卷轴：灵魂之戒",
        "icon": require('../images/item/item_178.png')
    },
    "178": {
        "id": 178,
        "name": "灵魂之戒",
        "icon": require('../images/item/item_178.png')
    },
    "179": {
        "id": 179,
        "name": "卷轴：奥术鞋",
        "icon": require('../images/item/item_179.png')
    },
    "180": {
        "id": 180,
        "name": "奥术鞋",
        "icon": require('../images/item/item_179.png')
    },
    "181": {
        "id": 181,
        "name": "淬毒之珠",
        "icon": require('../images/item/item_181.png')
    },
    "182": {
        "id": 182,
        "name": "圆盾",
        "icon": require('../images/item/item_182.png')
    },
    "183": {
        "id": 183,
        "name": "卷轴：影刃",
        "icon": require('../images/item/item_183.png')
    },
    "184": {
        "id": 184,
        "name": "卷轴：韧鼓",
        "icon": require('../images/item/item_185.png')
    },
    "185": {
        "id": 185,
        "name": "韧鼓",
        "icon": require('../images/item/item_185.png')
    },
    "186": {
        "id": 186,
        "name": "卷轴：勇气勋章",
        "icon": require('../images/item/item_186.png')
    },
    "187": {
        "id": 187,
        "name": "勇气勋章",
        "icon": require('../images/item/item_186.png')
    },
    "188": {
        "id": 188,
        "name": "诡计之雾",
        "icon": require('../images/item/item_188.png')
    },
    "189": {
        "id": 189,
        "name": "卷轴：纷争面纱",
        "icon": require('../images/item/item_189.png')
    },
    "190": {
        "id": 190,
        "name": "纷争面纱",
        "icon": require('../images/item/item_189.png')
    },
    "191": {
        "id": 191,
        "name": "卷轴：死灵书",
        "icon": require('../images/item/item_191.png')
    },
    "192": {
        "id": 192,
        "name": "卷轴：死灵书",
        "icon": require('../images/item/item_192.png')
    },
    "193": {
        "id": 193,
        "name": "死灵书",
        "icon": require('../images/item/item_193.png')
    },
    "194": {
        "id": 194,
        "name": "死灵书",
        "icon": require('../images/item/item_194.png')
    },
    "195": {
        "id": 195,
        "name": "卷轴：净魂之刃",
        "icon": require('../images/item/item_195.png')
    },
    "196": {
        "id": 196,
        "name": "净魂之刃",
        "icon": require('../images/item/item_196.png')
    },
    "197": {
        "id": 197,
        "name": "卷轴：达贡之神力",
        "icon": require('../images/item/item_197.png')
    },
    "198": {
        "id": 198,
        "name": "卷轴：达贡之神力",
        "icon": require('../images/item/item_198.png')
    },
    "199": {
        "id": 199,
        "name": "卷轴：达贡之神力",
        "icon": require('../images/item/item_199.png')
    },
    "200": {
        "id": 200,
        "name": "卷轴：达贡之神力",
        "icon": require('../images/item/item_200.png')
    },
    "201": {
        "id": 201,
        "name": "达贡之神力",
        "icon": require('../images/item/item_201.png')
    },
    "202": {
        "id": 202,
        "name": "达贡之神力",
        "icon": require('../images/item/item_202.png')
    },
    "203": {
        "id": 203,
        "name": "达贡之神力",
        "icon": require('../images/item/item_203.png')
    },
    "204": {
        "id": 204,
        "name": "达贡之神力",
        "icon": require('../images/item/item_204.png')
    },
    "205": {
        "id": 205,
        "name": "卷轴：阿托斯之棍",
        "icon": require('../images/item/item_206.png')
    },
    "206": {
        "id": 206,
        "name": "阿托斯之棍",
        "icon": require('../images/item/item_206.png')
    },
    "207": {
        "id": 207,
        "name": "卷轴：深渊之刃",
        "icon": require('../images/item/item_208.png')
    },
    "208": {
        "id": 208,
        "name": "深渊之刃",
        "icon": require('../images/item/item_208.png')
    },
    "209": {
        "id": 209,
        "name": "卷轴：天堂之戟",
        "icon": require('../images/item/item_209.png')
    },
    "210": {
        "id": 210,
        "name": "天堂之戟",
        "icon": require('../images/item/item_209.png')
    },
    "211": {
        "id": 211,
        "name": "卷轴：天鹰之戒",
        "icon": require('../images/item/item_211.png')
    },
    "212": {
        "id": 212,
        "name": "天鹰之戒",
        "icon": require('../images/item/item_211.png')
    },
    "213": {
        "id": 213,
        "name": "卷轴：静谧之鞋",
        "icon": require('../images/item/item_213.png')
    },
    "214": {
        "id": 214,
        "name": "静谧之鞋",
        "icon": require('../images/item/item_213.png')
    },
    "215": {
        "id": 215,
        "name": "暗影护符",
        "icon": require('../images/item/item_215.png')
    },
    "216": {
        "id": 216,
        "name": "魔法芒果",
        "icon": require('../images/item/item_216.png')
    },
    "217": {
        "id": 217,
        "name": "卷轴：侦查·岗哨守卫",
        "icon": require('../images/item/item_218.png')
    },
    "218": {
        "id": 218,
        "name": "侦查·岗哨守卫",
        "icon": require('../images/item/item_218.png')
    },
    "219": {
        "id": 219,
        "name": "卷轴：远行鞋",
        "icon": require('../images/item/item_220.png')
    },
    "220": {
        "id": 220,
        "name": "远行鞋",
        "icon": require('../images/item/item_220.png')
    },
    "221": {
        "id": 221,
        "name": "卷轴：清莲宝珠",
        "icon": require('../images/item/item_226.png')
    },
    "226": {
        "id": 226,
        "name": "清莲宝珠",
        "icon": require('../images/item/item_226.png')
    },
    "227": {
        "id": 227,
        "name": "卷轴：炎阳纹章",
        "icon": require('../images/item/item_229.png')
    },
    "228": {
        "id": 228,
        "name": "卷轴：玲珑心",
        "icon": require('../images/item/item_235.png')
    },
    "229": {
        "id": 229,
        "name": "炎阳纹章",
        "icon": require('../images/item/item_229.png')
    },
    "230": {
        "id": 230,
        "name": "卷轴：卫士胫甲",
        "icon": require('../images/item/item_231.png')
    },
    "231": {
        "id": 231,
        "name": "卫士胫甲",
        "icon": require('../images/item/item_231.png')
    },
    "232": {
        "id": 232,
        "name": "以太之镜",
        "icon": require('../images/item/item_232.png')
    },
    "233": {
        "id": 233,
        "name": "卷轴：以太之镜",
        "icon": require('../images/item/item_232.png')
    },
    "234": {
        "id": 234,
        "name": "卷轴：魔龙枪",
        "icon": require('../images/item/item_236.png')
    },
    "235": {
        "id": 235,
        "name": "玲珑心",
        "icon": require('../images/item/item_235.png')
    },
    "236": {
        "id": 236,
        "name": "魔龙枪",
        "icon": require('../images/item/item_236.png')
    },
    "237": {
        "id": 237,
        "name": "仙灵之火",
        "icon": require('../images/item/item_237.png')
    },
    "238": {
        "id": 238,
        "name": "卷轴：寒铁钢爪",
        "icon": require('../images/item/item_239.png')
    },
    "239": {
        "id": 239,
        "name": "寒铁钢爪",
        "icon": require('../images/item/item_239.png')
    },
    "240": {
        "id": 240,
        "name": "枯萎之石",
        "icon": require('../images/item/item_240.png')
    },
    "241": {
        "id": 241,
        "name": "树之祭祀（共享）",
        "icon": require('../images/item/item_241.png')
    },
    "242": {
        "id": 242,
        "name": "赤红甲",
        "icon": require('../images/item/item_242.png')
    },
    "243": {
        "id": 243,
        "name": "卷轴：赤红甲",
        "icon": require('../images/item/item_242.png')
    },
    "244": {
        "id": 244,
        "name": "风灵之纹",
        "icon": require('../images/item/item_244.png')
    },
    "245": {
        "id": 245,
        "name": "卷轴：血棘",
        "icon": require('../images/item/item_250.png')
    },
    "246": {
        "id": 246,
        "name": "卷轴：银月之晶",
        "icon": require('../images/item/item_247.png')
    },
    "247": {
        "id": 247,
        "name": "银月之晶",
        "icon": require('../images/item/item_247.png')
    },
    "248": {
        "id": 248,
        "name": "卷轴：白银之锋",
        "icon": require('../images/item/item_249.png')
    },
    "249": {
        "id": 249,
        "name": "白银之锋",
        "icon": require('../images/item/item_249.png')
    },
    "250": {
        "id": 250,
        "name": "血棘",
        "icon": require('../images/item/item_250.png')
    },
    "251": {
        "id": 251,
        "name": "卷轴：回音战刃",
        "icon": require('../images/item/item_252.png')
    },
    "252": {
        "id": 252,
        "name": "回音战刃",
        "icon": require('../images/item/item_252.png')
    },
    "253": {
        "id": 253,
        "name": "卷轴：微光披风",
        "icon": require('../images/item/item_254.png')
    },
    "254": {
        "id": 254,
        "name": "微光披风",
        "icon": require('../images/item/item_254.png')
    },
    "257": {
        "id": 257,
        "name": "知识之书",
        "icon": require('../images/item/item_257.png')
    },
    "262": {
        "id": 262,
        "name": "卷轴：飓风长戟",
        "icon": require('../images/item/item_263.png')
    },
    "263": {
        "id": 263,
        "name": "飓风长戟",
        "icon": require('../images/item/item_263.png')
    },
    "265": {
        "id": 265,
        "name": "凝魂之泪",
        "icon": require('../images/item/item_265.png')
    }
}



