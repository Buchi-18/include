javascriptのfetch() APIを使用して
Header,Footerのインクルードを実装

対象のHTMLファイルにそれぞれの差し込み位置を指定。


<header id="header">
      <!-- ここに挿入される *** include/header.html *** - ->
    </header>
 ...
 ...
 ...

<footer id="footer">
      <!-- ここに挿入される *** include/footer.html *** -->
    </footer>

スクリプトソース
*** js/include.js ***


※<head>内はページごとに読込リンク等が異なる場合が多いので
今回は使い回しの対象外とした。