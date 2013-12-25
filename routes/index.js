exports.index = function(req, res){
  res.render('index', {});
};

exports.blog = function(req, res){
  res.render('blog', {});
};

exports.project = function(req, res){
  res.render('project', {});
};

exports.projects = function(req, res){
  res.render('projects', {});
};

exports.contact = function(req, res){
  res.render('contact', {});
};

exports.login = function(req, res){
  res.render('login', {});
};

exports.admin = function(req, res){
  res.render('admin', {  'logged':'in'});
};

exports.adminDashboard = function(req, res){
  res.render('adminDashboard', {});
};

exports.memberDashboard = function(req, res){
  res.render('memberDashboard', {});
};

exports.userProfile = function(req, res){
  res.render('userProfile', {});
};

exports.moderatorDashboard = function(req, res){
  res.render('moderatorDashboard', {});
};

