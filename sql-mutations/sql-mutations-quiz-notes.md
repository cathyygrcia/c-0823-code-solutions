# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?

  Create, Read, Update, Delete
  Insert, Select, Update, Delete

- How do you add a row to a SQL table?

  insert (table name) (columns)
  values(values for each column)

- How do you add multiple rows to a SQL table at once?

  seperate all the values with a ,
  returning \*;

- How do you update rows in a database table?

  update (table name)
  set (column name) = value;

- How do you delete rows from a database table?

  delete
  from(table name)
  where (id) = #
  returning \*;

- Why is it important to include a `where` clause in your `update` and `delete` statements?

  because all will be updated or deleted

- How do you accidentally delete or update all rows in a table?

  not having a where clause

- How do you get back the modified row without a separate `select` statement?

  with the returning clause

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
