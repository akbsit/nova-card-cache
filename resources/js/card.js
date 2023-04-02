import Card from './components/Card';

Nova.booting((app, store) => {
  app.component('nova-card-cache', Card);
});
