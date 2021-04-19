const initAutoresizeTextarea = () => {
  const textarea = document.querySelectorAll('.js-autoresize-textarea textarea');

  /**
   * Определение высоты элемента textarea
   * @param {HTMLElement} el - DOM элемент textarea
   * @returns {Number} - высота элемента
   */
  const getHeightWithoutBorder = (el) => {
    let realscrollHeight = el.scrollHeight;

    if (!el.value) {
      el.value = 0;
      realscrollHeight = el.scrollHeight;
      el.value = '';
    }

    return realscrollHeight + el.offsetHeight - el.clientHeight;
  };

  /**
   * Изменение высоты элемента textarea
   * @param {*} el
   */
  const resizeHeight = (el) => {
    el.style.height = 'auto';
    el.style.height = `${getHeightWithoutBorder(el)}px`;
  };

  if (!textarea.length) {
    return;
  }

  textarea.forEach((el) => {
    el.style.overflow = 'hidden';
    el.style.resize = 'none';
    resizeHeight(el);

    el.addEventListener('input', () => {
      resizeHeight(el);
    });

    const form = el.closest('form');

    if (form) {
      form.addEventListener('submit', () => {
        resizeHeight(el);
      });
    }
  });

  window.addEventListener('resize', () => {
    textarea.forEach((el) => {
      resizeHeight(el);
    });
  });
};

export {initAutoresizeTextarea};
