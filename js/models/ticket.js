var Ticket = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  status: DS.attr('string')
});

Ticket.FIXTURES = [{
  id: 1,
  title: 'Ticket 1',
  description: 'A description for the ticket here.',
  status: 'New'
}];

module.exports = Ticket;

