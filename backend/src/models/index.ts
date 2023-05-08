import User from './user';
import Group from './group';
import Subject from './subject';
import Task from './task';
import UserSubject from './userSubject';
import GroupSubject from './groupSubjects';
import UserTask from './userTask';

User.belongsTo(Group);
Group.hasMany(User);

Task.belongsTo(Subject);
Subject.hasMany(Task);

User.belongsToMany(Task, { through: UserTask });
Task.belongsToMany(User, { through: UserTask });

User.belongsToMany(Subject, { through: UserSubject });
Subject.belongsToMany(User, { through: UserSubject });

Group.belongsToMany(Subject, { through: GroupSubject });
Subject.belongsToMany(Group, { through: GroupSubject });

export { User, Group, Subject, Task };
