
<!-- Cookie Banner Script -->
<script>
window.addEventListener("load", function(){
  setTimeout(function(){
    let banner = document.createElement('div');
    banner.innerHTML = "We use cookies to improve your experience. <a href='cookies.html'>Learn more</a>";
    banner.style.cssText = "position:fixed;bottom:0;width:100%;background:#000;color:#fff;padding:10px;text-align:center;z-index:1000;";
    document.body.appendChild(banner);
  }, 500);
});
</script>
