const Card = require('./Card');
const List = require('./List');
const Tag = require('./Tag');
const CardTag = require('./CardTag')


List.hasMany(Card, {foreignKey: 'list_id'});
Card.belongsTo(List, {foreignKey: 'list_id'});


Tag.belongsToMany(Card, {through: CardTag});
Card.belongsToMany(Tag, {through: CardTag});