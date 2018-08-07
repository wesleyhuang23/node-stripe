module.exports = {

  db: process.env.MONGODB || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/stripe-membership',

  sessionSecret: process.env.SESSION_SECRET || '',

  mailgun: {
    apiKey: process.env.MAILGUN_API_KEY || '',
    domain: process.env.MAILGUN_DOMAIN || ''
  },

  stripeOptions: {
    apiKey: process.env.STRIPE_KEY || '',
    stripePubKey: process.env.STRIPE_PUB_KEY || '',
    defaultPlan: 'plan_DNMMtov6dK8oSz',
    plans: ['plan_DNMMtov6dK8oSz', 'plan_DLViHOuVmYagkF'],
    planData: {
      'plan_DNMMtov6dK8oSz': {
        name: 'Free',
        price: 0
      },
      'plan_DLViHOuVmYagkF': {
        name: 'Member',
        price: 5
      }
    }
  },

  googleAnalytics: process.env.GOOGLE_ANALYTICS || ''
};
