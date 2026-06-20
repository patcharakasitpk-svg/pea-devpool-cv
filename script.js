// หา element 3 ตัวที่ต้องใช้: ปุ่มกด, พารากราฟที่จะซ่อน/โชว์, และลูกศรไอคอน
const toggleBtn   = document.getElementById('toggleAboutBtn');
const aboutExtra  = document.getElementById('aboutExtra');
const toggleArrow = document.getElementById('toggleArrow');

toggleBtn.addEventListener('click', () => {
  // classList.toggle() คืนค่า true ถ้า "เพิ่ม" class กลับมา (คือกำลังเปิดอยู่)
  // และคืนค่า false ถ้า "เอา" class ออก (คือกำลังปิด)
  const isOpen = aboutExtra.classList.toggle('is-open');

  // สลับ class ของลูกศรให้ตรงกับสถานะเดียวกัน (หมุนทิศทาง)
  toggleArrow.classList.toggle('is-open', isOpen);

  // เปลี่ยนข้อความปุ่มให้ตรงกับสถานะปัจจุบัน
  toggleBtn.firstChild.textContent = isOpen ? 'ย่อข้อความ ' : 'อ่านเพิ่มเติม ';
});
