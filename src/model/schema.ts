import { appSchema, tableSchema } from '@nozbe/watermelondb';

const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'accounts',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'initial_value', type: 'number', isOptional: true },
        { name: 'type', type: 'string' },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
  ],
});

export default mySchema;
