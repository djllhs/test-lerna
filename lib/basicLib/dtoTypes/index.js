'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatPackage = formatPackage;
exports.formatNoticeType = formatNoticeType;
exports.formatDifficulty = formatDifficulty;
exports.formatAnswerType = formatAnswerType;
exports.formatAnswerTypeEn = formatAnswerTypeEn;
exports.formatAnswerTypeNum = formatAnswerTypeNum;
exports.formatResourcesType = formatResourcesType;
var dtoTypes = exports.dtoTypes = {
  // 套餐版本
  formatPackage: function formatPackage(type) {
    return { 0: '基础版', 1: '高级版', 2: '企业版' }[+type];
  }
};

function formatPackage(type) {
  return { 0: '基础版', 1: '高级版', 2: '企业版' }[+type];
}

// 公告类型
function formatNoticeType(type) {
  return {
    1: '版本更新', 2: '功能发布', 3: '支付结算', 4: '重要通知', 5: '课程预告', 6: '合同审核',
    7: '官方培训', 8: '问卷调查', 9: '到期通知', 10: '套餐变更', 11: '续期成功', 12: '应用到期',
    13: '应用过期', 14: '提现通知'
  }[+type];
}

// --------题库------------

// 难度
function formatDifficulty(type) {
  return { 1: '容易', 2: '较易', 3: '一般', 4: '较难', 5: '困难' }[+type];
}

// 题型
function formatAnswerType(type) {
  return { 0: '单选题', 1: '多选题', 3: '判断题', 4: '综合题', 6: '材料题' }[+type];
}

// 答案类型
function formatAnswerTypeEn(type) {
  return { 0: 'single', 1: 'multiple', 3: 'judge', 4: 'synthesis', 6: 'material' }[+type];
}

function formatAnswerTypeNum(type) {
  return { 'single': '0', 'multiple': '1', 'judge': '3', 'synthesis': '4', 'material': '6' }[+type];
}

// 资源类型
function formatResourcesType(type) {
  return {
    1: '视频', 2: '音频', 3: '图片', 4: '链接', 6: '题目', 7: '压缩包',
    13: '答题卡', 15: '试卷', 19: '文档', 24: '直播', 27: '图文', 40: '文件夹',
    42: '文件夹', 43: '文件夹', 48: '文件夹', 49: '试卷解析'
  }[+type];
}