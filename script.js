// ===== ส่วนที่ 1: Toggle เปิด-ปิด Portfolio (carbonMICE) =====
const portfolioToggleBtn = document.getElementById('portfolioToggleBtn');
const portfolioAnswer = document.getElementById('portfolioAnswer');
const chevronIcon = document.getElementById('chevronIcon');

portfolioToggleBtn.addEventListener('click', () => {
  const isOpen = portfolioAnswer.classList.toggle('is-open');
  chevronIcon.classList.toggle('is-open', isOpen);
});

// ===== ส่วนที่ 2: ดึงรายการหนังสือจาก Open Library API =====
const bookList = document.getElementById('bookList');

const isbnList = [
  { isbn: '9780735211292', label: 'Atomic Habits' },
  { isbn: '9780465050659', label: 'The Design of Everyday Things' },
  { isbn: '9781708315955', label: 'Master Your Emotions' },
  { isbn: '9781846683954', label: 'The decision book' },
  { isbn: '9780241982280', label: 'Communication Book'},
  { isbn: '9780986022043', label: 'Communication Book'},
  { isbn: '9781577313366', label: 'Communication Book'},
  { isbn: '9781800814646', label: 'Communication Book'},
  { isbn: '9780593716625', label: 'Communication Book'},
  { isbn: '9780007467976', label: 'Communication Book'}
  
  
  
  
];

bookList.innerHTML = '';

isbnList.forEach(({ isbn, label }) => {
  fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`)
    .then(response => response.json())
    .then(data => {
      const book = data[`ISBN:${isbn}`];

      if (!book) {
        console.log(`ไม่พบหนังสือ: ${label}`);
        bookList.innerHTML += `<p class="error-text">ไม่พบข้อมูล "${label}"</p>`;
        return;
      }

      const bookTitle = book.title || label;
      const bookAuthor = (book.authors && book.authors[0]) ? book.authors[0].name : 'ไม่พบผู้เขียน';

      bookList.innerHTML += `
        <div class="book-card">
          <img src="https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg" alt="ปก ${bookTitle}">
          <p class="book-title">${bookTitle}</p>
          <p class="book-author">${bookAuthor}</p>
        </div>
      `;
    })
    .catch(error => {
      console.log(`เกิด error ตอนโหลด "${label}":`, error.message);
      bookList.innerHTML += `<p class="error-text">โหลด "${label}" ไม่สำเร็จ</p>`;
    });
});