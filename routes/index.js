const express = require('express');
const router = express.Router();
const fs = require('fs');

/* 首页 */
router.get('/', (req, res, next) => {
  fs.readFile('public/json/index.json', 'utf8', (err, indexData) => {
    if (err) throw err;
    indexData = JSON.parse(indexData);
    res.render('index', {
      title: '渡一教育前端培训_渡一教育官网',
      keywords: '渡一教育，前端培训，渡一教育就业班，渡一教育进阶班，渡一教育视频,渡一教育姬成',
      description: '渡一教育是我国首家开设“web前端”精品就业培训的教育机构。课程内容质量精良，长期以来，一直处于业内领军位置。机构下设JavaWeb，Python，Web前端，Data Scientist，Data Analyst，Data Engineer，Machine Learning，Deep Learning等课程。目前已与腾讯课堂、百度传课、ccTalk、优酷、爱奇艺、51CTO等平台达成合作，其中与腾讯课堂、爱奇艺、ccTalk达成深度合作。渡一正式将塑造多元化的教育形式，列入企业发展的长期规划中。',
      studentInfo: indexData.student,
      teacherInfo: indexData.teacher,
      cooperationInfo: indexData.cooperation
    });
  });
});

/* 课程学习页 */
router.get('/study', (req, res, next) => {
  let ua = req.headers['user-agent'];
  fs.readFile('public/json/study.json', 'utf8', (err, studyData) =>{
    if (err) throw err;
    studyData = JSON.parse(studyData);
    // let page = /Android|webOS|iPhone|iPod|BlackBerry/i.test(ua) ? 'studymobile' : 'study';
    res.render('study', {
      title: '渡一教育就业班_渡一教育进阶班_渡一教育官网',
      keywords: '渡一教育 ，前端培训，渡一教育就业班视频，渡一教育进阶班视频，渡一教育视频',
      description: '截止2018年初，渡一教育市场辐射范围除中国内陆外已达中国台湾，北美，加拿大，澳洲等国家地区。',
      lessons: studyData.lessons,
      exercises: studyData.exercises
    });
  });
});

/* 学员展示页 */
router.get('/student', (req, res, next) => {
  fs.readFile('public/json/student.json', 'utf8', (err, studentData) => {
    if (err) throw err;
    studentData = JSON.parse(studentData);
    res.render('student', {
      title: '学员展示_学员就业排行榜_渡一教育官网',
      keywords: '渡一教育 ，前端培训，学员展示',
      description: '渡一教育已累积培养学员上千名，实现就业率100%，且学员年薪均超过10w。',
      employmentList: studentData.employmentList,
      activityList: studentData.activityList,
      campusList: studentData.campusList
    });
  });
});

/* 关于页 */
router.get('/about', (req, res, next) => {
  res.render('about', {
    title: '关于渡一_渡一教育官网',
    keywords: '渡一教育 ，前端培训，渡一招聘',
    description: '渡一教育是国内唯一“连续三年培养出年薪超过40W的本科就业学员”的教育机构，是国内唯一连续38个月，实现100%就业率，且学员年薪均过10w的教育机构，是国内可以和学员签订就业协议，就业年薪不足10w，全额退费的教育机构。'
  });
});


module.exports = router;
