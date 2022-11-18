import User from './user';
import Group from './group';
import Subject from './subject';
import UserSubject from './userSubject';
import GroupSubject from './groupSubjects';

User.belongsTo(Group);
Group.hasMany(User);

User.belongsToMany(Subject, { through: UserSubject });
Subject.belongsToMany(User, { through: UserSubject });

Group.belongsToMany(Subject, { through: GroupSubject });
Subject.belongsToMany(Group, { through: GroupSubject });

export { User, Group, Subject };
