// script.js

document.addEventListener('DOMContentLoaded', () => {
  console.log('IT部門ポータルサイトのスクリプトが読み込まれました。');

  // 検索入力フィールドを取得
  const searchInput = document.getElementById('searchInput');

  // 検索入力フィールドが存在する場合のみイベントリスナーを設定
  if (searchInput) {
    // Enterキーが押されたときの処理
    searchInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        // 入力値を取得（前後の空白は削除）
        const query = searchInput.value.trim();

        if (query) {
          // 入力があればアラートを表示（実際の検索処理はここに実装）
          alert(`「${query}」を検索します。(この機能は現在実装中です)`);
        } else {
          // 何も入力されていない場合は何もしない
          console.log('検索キーワードが入力されていません。');
        }
      }
    });
  }

  // ここに他のJavaScriptのコードを追加していきます
  // 例：ダークモード切り替え、お知らせの非表示機能など
});
