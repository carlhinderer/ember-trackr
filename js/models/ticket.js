var Ticket = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  status: DS.attr('string')
});

Ticket.FIXTURES = [
{
  id: 1,
  title: 'Ticket 1',
  description: 'A description for the ticket here.',
  status: 'New'
},
{
  id: 2,
  title: 'Ticket 2',
  description: 'A description for another ticket.',
  status: 'New'
},
{
  id: 3,
  title: 'Ticket 3',
  description: 'Yet another description for yet another ticket.',
  status: 'New'
}
];

module.exports = Ticket;

