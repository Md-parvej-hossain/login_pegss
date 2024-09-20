document
  .getElementById('cash_out_btn_show')
  .addEventListener('click', function () {
    document.getElementById('cash_out_form').classList.remove('hidden');
    document.getElementById('add_mune_form').classList.add('hidden');
  });
document.getElementById('add_mone_btn').addEventListener('click', function () {
  document.getElementById('cash_out_form').classList.add('hidden');
  document.getElementById('add_mune_form').classList.remove('hidden');
});
