import User from './user';
import Group from './group';
import Subject from './subject';
import Task from './task';
import Answer from './answer';
import UserSubject from './userSubject';
import GroupSubject from './groupSubjects';
import UserTask from './userTask';
import TaskSubject from './taskSubject';

User.belongsTo(Group, { as: 'group' });
//Group.hasMany(User, { as: 'group' });

Task.belongsToMany(Subject, { through: TaskSubject });
Subject.belongsToMany(Task, { through: TaskSubject, as: 'tasks' });

User.belongsToMany(Task, { through: UserTask });
Task.belongsToMany(User, { through: UserTask });

User.belongsToMany(Subject, { through: UserSubject });
Subject.belongsToMany(User, { through: UserSubject });

Group.belongsToMany(Subject, { through: GroupSubject, as: 'subjects' });
Subject.belongsToMany(Group, { through: GroupSubject });

//Answer.belongsTo(Task, { as: 'task' });
Task.hasMany(Answer, { foreignKey: 'taskId', as: 'answers' });

export { User, Group, Subject, Task, Answer };
