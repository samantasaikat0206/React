> # React Basic

## Class based components

## Function Based Components

> To create function based component, we write below word in the code space
```
    rafce
```
## Nested Components

> App --> ProductList --> ProductItems --> Others

## How to add Style in Your React app 

> Thare are three method to add style in your react app
> 1. using inline style like `style={{<here write css property in object format>}}`example given below
```jsx
    <div style={{padding: '10px', border: '1px solid #ccc', margin: '10px 0'}} key={key} >
      <p>{product}</p>
      <button className={styles.buttonStyle}>Buy</button>
    </div>
```
> 2. using external css here `style.css` and import it like here ``` import ./style.css``` and write your css in `style.css` & useing ` className` property

> 3. use css module like here `ProductItem.module.css` and import it like ``` import styles from ./ProductItem.module.css``` & and use like 
```jsx
<button className={styles.buttonStyle}>Buy</button>
```

