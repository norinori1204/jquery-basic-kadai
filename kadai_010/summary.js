$(function() {
  // 1. 文字色を赤にする
  $('#change-color').click(function() {
    $('#target').css('color', 'red');
  });

  // 2. 文字内容を日本語から英語に変更する
  $('#change-text').click(function() {
    $('#target').text('Hello!');
  });

  // 3. フェードアウト（ゆっくりと非表示にする）
  $('#fade-out').click(function() {
    $('#target').fadeOut();
  });

  // 4. フェードイン（ゆっくりと表示する）
  $('#fade-in').click(function() {
    $('#target').fadeIn();
  });
});