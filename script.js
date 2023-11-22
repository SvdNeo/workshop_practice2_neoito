const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
      const input = item.querySelector('input');
      const content = item.querySelector('.accordion-content');
      const arrowIcon = item.querySelector('svg');

      input.addEventListener('change', () => {
        if (input.checked) {
          content.style.display = 'block';
          arrowIcon.style.transform = 'rotate(180deg)';
        } else {
          content.style.display = 'none';
          arrowIcon.style.transform = 'rotate(0deg)';
        }
      });
    });