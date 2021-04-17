const initSelect = () => {
  const customSelects = document.querySelectorAll('.custom-select');

  if (!customSelects.length) return;

  const selectWrappers = [];
  const valueFields = [];

  const openSelect = (select) => {
    if (!select.classList.contains('active')) {
      const selectItems = select.querySelectorAll('.custom-select__option a');
      select.classList.add('active');
      document.addEventListener('click', onMissClickClose(select));

      selectItems.forEach((item) => {
        item.addEventListener('click', onItemClickSelectValue);
      })
    }
  };

  const closeSelect = (select) => {
    const selectItems = select.querySelectorAll('.custom-select__option a');
    select.classList.remove('active');
    document.removeEventListener('click', onMissClickClose(select));

    selectItems.forEach((item) => {
      item.removeEventListener('click', onItemClickSelectValue);
    })
  };

  const onMissClickClose = (select) => {
    return (evt) => {
      if (!(select.contains(evt.target))) {
        closeSelect(select);
      }
    }
  }

  function onItemClickSelectValue() {
    this.closest('.custom-select').querySelector('.custom-select input').value = this.dataset.value;
    this.closest('.custom-select').querySelectorAll('.custom-select__option').forEach((item) => {
      if (item.contains(this)) {
        item.classList.add('selected');
      } else {
        item.classList.remove('selected');
      }
    })
    closeSelect(this.closest('.custom-select'));
  };

  customSelects.forEach((item) => {
    selectWrappers.push(item.querySelector('.custom-select__wrapper'));
    valueFields.push(item.querySelector('.custom-select input'));
  });

  selectWrappers.forEach((item, index) => {
    item.addEventListener('click', () => {
      openSelect(customSelects[index]);
    })
  })
};

export {
  initSelect
};