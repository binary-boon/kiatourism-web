import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  access: {
    read: () => true, // Allow public read for form submission
    create: () => true, // Allow public create for form submission
  },
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'phone', 'status', 'createdAt'],
    group: 'Marketing',
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Phone Number',
    },
    {
      name: 'subject',
      type: 'text',
      required: true,
      label: 'Subject',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Message',
    },
    {
      name: 'preferredContactMethod',
      type: 'select',
      options: [
        { label: 'Email', value: 'email' },
        { label: 'Phone', value: 'phone' },
        { label: 'WhatsApp', value: 'whatsapp' },
      ],
      defaultValue: 'email',
      label: 'Preferred Contact Method',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Converted', value: 'converted' },
        { label: 'Closed', value: 'closed' },
      ],
      defaultValue: 'new',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'source',
      type: 'text',
      defaultValue: 'Website Contact Form',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        position: 'sidebar',
      },
      label: 'Internal Notes',
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, operation, req }) => {
        // Only send email on create (new submission)
        if (operation === 'create') {
          try {
            // Send email notification
            await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/send-lead-notification`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                lead: doc,
              }),
            })
          } catch (error) {
            console.error('Failed to send lead notification:', error)
          }
        }
        return doc
      },
    ],
  },
  timestamps: true,
}