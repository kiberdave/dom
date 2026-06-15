# JavaScript DOM — 20 დავალება

## 1. სათაურის ტექსტის შეცვლა (`getElementById` და `textContent`)

**პირობა:** იპოვე `id="title"` ელემენტი და მისი ტექსტი შეცვალე `"Welcome to JavaScript"`-ით.

```html
<h1 id="title">Old Title</h1>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:** გვერდზე გამოჩნდება:

```text
Welcome to JavaScript
```

---

## 2. პარაგრაფის პოვნა (`querySelector`)

**პირობა:** `querySelector` მეთოდით იპოვე პირველი `p` ელემენტი და მისი ტექსტი შეცვალე `"DOM is easy"`-ით.

```html
<p>First paragraph</p>
<p>Second paragraph</p>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:** პირველი პარაგრაფის ტექსტი გახდება `"DOM is easy"`.

---

## 3. ყველა ელემენტის არჩევა (`querySelectorAll`)

**პირობა:** იპოვე ყველა `.item` კლასის მქონე ელემენტი და თითოეულის ტექსტი დაბეჭდე კონსოლში.

```html
<ul>
  <li class="item">HTML</li>
  <li class="item">CSS</li>
  <li class="item">JavaScript</li>
</ul>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი კონსოლში:**

```text
HTML
CSS
JavaScript
```

---

## 4. ტექსტის ფერის შეცვლა (`style`)

**პირობა:** ღილაკზე დაჭერისას პარაგრაფის ტექსტის ფერი შეცვალე წითლად.

```html
<p id="message">Change my color</p>
<button id="changeColorBtn">Change Color</button>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:** ღილაკზე დაჭერის შემდეგ ტექსტი გახდება წითელი.

---

## 5. ფონის ფერის შეცვლა (`style.backgroundColor`)

**პირობა:** ღილაკზე დაჭერისას `div` ელემენტის ფონის ფერი შეცვალე `"lightblue"`-ით.

```html
<div id="box">Box</div>
<button id="changeBackgroundBtn">Change Background</button>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:** `div` ელემენტს ექნება ღია ლურჯი ფონი.

---

## 6. კლასის დამატება (`classList.add`)

**პირობა:** ღილაკზე დაჭერისას `div` ელემენტს დაამატე კლასი `"active"`.

```html
<style>
  .active {
    background-color: green;
    color: white;
    padding: 20px;
  }
</style>

<div id="card">Card</div>
<button id="activateBtn">Activate</button>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:** ღილაკზე დაჭერის შემდეგ `div` ელემენტს დაემატება `"active"` კლასი.

---

## 7. კლასის წაშლა (`classList.remove`)

**პირობა:** ღილაკზე დაჭერისას `div` ელემენტს წაუშალე `"hidden"` კლასი.

```html
<style>
  .hidden {
    display: none;
  }
</style>

<div id="content" class="hidden">Hidden content</div>
<button id="showBtn">Show Content</button>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:** ღილაკზე დაჭერის შემდეგ დამალული ტექსტი გამოჩნდება.

---

## 8. კლასის გადართვა (`classList.toggle`)

**პირობა:** ღილაკზე ყოველი დაჭერისას `div` ელემენტს ჩაურთე ან გამოურთე `"dark"` კლასი.

```html
<style>
  .dark {
    background-color: black;
    color: white;
  }
</style>

<div id="themeBox">Theme Box</div>
<button id="toggleThemeBtn">Toggle Theme</button>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:** ღილაკზე დაჭერისას მუქი რეჟიმი ჩაირთვება, ხელახლა დაჭერისას კი გამოირთვება.

---

## 9. ახალი ელემენტის შექმნა (`createElement` და `append`)

**პირობა:** JavaScript-ის გამოყენებით შექმენი ახალი `li` ელემენტი, ჩაწერე მასში `"React"` და დაამატე სიის ბოლოში.

```html
<ul id="technologies">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:**

```text
HTML
CSS
JavaScript
React
```

---

## 10. ელემენტის წაშლა (`remove`)

**პირობა:** ღილაკზე დაჭერისას წაშალე `id="notification"` ელემენტი.

```html
<div id="notification">You have a new message</div>
<button id="removeBtn">Remove Notification</button>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:** ღილაკზე დაჭერის შემდეგ შეტყობინება გაქრება.

---

## 11. ატრიბუტის შეცვლა (`setAttribute`)

**პირობა:** ღილაკზე დაჭერისას სურათის `src` ატრიბუტი შეცვალე `"new-image.jpg"`-ით.

```html
<img id="photo" src="old-image.jpg" alt="Old image">
<button id="changeImageBtn">Change Image</button>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:** სურათის მისამართი შეიცვლება `"new-image.jpg"`-ით.

---

## 12. ატრიბუტის მიღება (`getAttribute`)

**პირობა:** მიიღე ბმულის `href` ატრიბუტის მნიშვნელობა და დაბეჭდე კონსოლში.

```html
<a id="websiteLink" href="https://example.com">Visit Website</a>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი კონსოლში:**

```text
https://example.com
```

---

## 13. Input-ის მნიშვნელობის მიღება (`value`)

**პირობა:** ღილაკზე დაჭერისას მიიღე input-ში შეყვანილი ტექსტი და დაბეჭდე კონსოლში.

```html
<input id="usernameInput" type="text" placeholder="Enter username">
<button id="submitBtn">Submit</button>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:** კონსოლში დაიბეჭდება მომხმარებლის მიერ შეყვანილი ტექსტი.

---

## 14. Input-ის მნიშვნელობის გვერდზე გამოტანა

**პირობა:** ღილაკზე დაჭერისას input-ში შეყვანილი სახელი გამოიტანე `p` ელემენტში.

```html
<input id="nameInput" type="text" placeholder="Enter your name">
<button id="greetBtn">Greet</button>

<p id="result"></p>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:** თუ მომხმარებელი შეიყვანს `"Nika"`-ს, გვერდზე გამოჩნდება:

```text
Hello, Nika!
```

---

## 15. მრიცხველის გაზრდა

**პირობა:** შექმენი მრიცხველი. ღილაკზე ყოველი დაჭერისას რიცხვი ერთით უნდა გაიზარდოს.

```html
<p id="counter">0</p>
<button id="increaseBtn">Increase</button>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:**

```text
0 → 1 → 2 → 3
```

---

## 16. ტექსტის დამალვა და გამოჩენა

**პირობა:** ღილაკზე დაჭერისას პარაგრაფი დამალე. ღილაკზე ხელახლა დაჭერისას ისევ გამოაჩინე.

```html
<p id="description">This text can be hidden.</p>
<button id="toggleBtn">Hide / Show</button>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:** ღილაკი ცვლის ტექსტის ხილვადობას.

---

## 17. პროდუქტის დამატება სიაში

**პირობა:** input-ში შეყვანილი პროდუქტი ღილაკზე დაჭერისას დაამატე `ul` ელემენტში ახალი `li` ელემენტის სახით. დამატების შემდეგ input გაასუფთავე.

```html
<input id="productInput" type="text" placeholder="Enter product">
<button id="addProductBtn">Add Product</button>

<ul id="productList"></ul>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:** თუ მომხმარებელი შეიყვანს `"Laptop"`-ს, სიაში დაემატება:

```text
Laptop
```

---

## 18. კონკრეტული სიის ელემენტის წაშლა

**პირობა:** თითოეულ ღილაკზე დაჭერისას წაშალე მის გვერდით არსებული `li` ელემენტი.

```html
<ul id="taskList">
  <li>
    Learn HTML
    <button class="deleteBtn">Delete</button>
  </li>

  <li>
    Learn CSS
    <button class="deleteBtn">Delete</button>
  </li>

  <li>
    Learn JavaScript
    <button class="deleteBtn">Delete</button>
  </li>
</ul>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:** შესაბამის `Delete` ღილაკზე დაჭერისას კონკრეტული დავალება წაიშლება.

---

## 19. ფორმის გაგზავნის შეჩერება (`preventDefault`)

**პირობა:** ფორმის გაგზავნისას გამოიყენე `preventDefault`, რათა გვერდი არ გადაიტვირთოს. შემდეგ input-ში შეყვანილი email გამოიტანე პარაგრაფში.

```html
<form id="emailForm">
  <input id="emailInput" type="email" placeholder="Enter email">
  <button type="submit">Submit</button>
</form>

<p id="emailResult"></p>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:** გვერდზე გამოჩნდება შეყვანილი email და გვერდი არ გადაიტვირთება.

---

## 20. მარტივი Todo List

**პირობა:** შექმენი მარტივი Todo List.

მომხმარებელს უნდა შეეძლოს:

* input-ში დავალების ჩაწერა;
* დავალების სიაში დამატება;
* ცარიელი ტექსტის დამატების შეზღუდვა;
* დამატებული დავალების წაშლა;
* დავალებაზე დაჭერისას `"completed"` კლასის ჩართვა ან გამორთვა.

```html
<style>
  .completed {
    text-decoration: line-through;
    opacity: 0.6;
  }
</style>

<input id="todoInput" type="text" placeholder="Enter task">
<button id="addTodoBtn">Add Task</button>

<ul id="todoList"></ul>

<script>
  // შენი კოდი აქ...
</script>
```

**მოსალოდნელი შედეგი:** მომხმარებელს შეეძლება დავალებების დამატება, დასრულებულად მონიშვნა და წაშლა.
