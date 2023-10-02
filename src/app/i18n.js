import i18next from 'i18next';

// TODO validate this texts with the client
i18next.addResources('en', 'SEO', {
  HOME_TITLE: 'Pivot | You workout, reenvisioned',
  HOME_DESCRIPTION:
    "It's time for a killer workout with trainers who can see when you make a mistake and help you fix it. Live.",
  PRODUCT_TITLE: 'Pivot | Product',
  PRODUCT_DESCRIPTION:
    'Less binge watching, more fat burning. The Pivot comes complete with everything you need to transform your workout at home—including premium equipment powered by the best of the fitness world’s coaches and classes.',
  CLASSES_TITLE: 'Pivot | Classes',
  CLASSES_DESCRIPTION: 'Strength runs everything.',
  TECHNOLOGY_TITLE: 'Pivot | Technology',
  TECHNOLOGY_DESCRIPTION: 'Pushing coach expertise to its highest power.',
  CHECKOUT_TITLE: 'Pivot | Checkout',
  CHECKOUT_DESCRIPTION: 'Checkout page',
  CONFIRMATION_TITLE: 'Pivot | Confirmation',
  CONFIRMATION_DESCRIPTION:
    'We’ll be in close contact in the spring when your Pivot is ready to ship—giving you plenty of time to choose its perfect spot in your home.',
  TERMS_LEGAL_PRIVACY_TITLE: 'Pivot | Privacy, Legal and Terms',
  LEGAL_PRIVACY_DESCRIPTION: 'Pivot | Privacy, Legal and terms',
  ABOUT: 'Pivot | About',
  FINANCING: 'Pivot | Financing'
});

i18next.addResources('en', 'product', {
  PIVOT_NAME: 'The Pivot',
  PIVOT_DESCRIPTION: 'Weights + Accessories\n{{warranty}} Standard Warranty',
  SUBSCRIPTION_NAME: 'Subscription ({{time}})',
  SUBSCRIPTION_DESCRIPTION:
    // eslint-disable-next-line no-template-curly-in-string
    '${{price}}/{{recurrency}} subscription\n Charges begin upon device activation\n(Unlimited Pivot classes)',
  DELIVERY_AND_INSTALLATION_NAME: 'Delivery & Installation'
});

i18next.addResources('en', 'time', {
  YEAR: '{{count}} year',
  YEAR_plural: '{{count}} years',
  MONTH: '{{count}} Month',
  MONTH_plural: '{{count}} Months'
});

i18next.addResources('en', 'errors', {
  ALREADY_SUBSCRIBED: '{{email}} is already subscribed.'
});

i18next.addResources('en', 'validationErrors', {
  REQUIRED: 'This field is required',
  EMAIL: 'The email format is invalid',
  ZIP_CODE: 'Invalid zip code',
  NUMBER: 'This field must be numeric'
});
