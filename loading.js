(function () {
  function loading(status) {
    if (status) {
      document.querySelector('body').classList.add('loading_no_scroll');
      var layer = document.createElement('div');
      layer.style = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.7);';
      layer.setAttribute('id', 'loading_layer');
      var loadingDom = document.createElement('div');
      loadingDom.style = 'position:absolute;top:50%;left:50%;width:80px;height:20px;margin-left:-40px;margin-top:-10px;';
      loadingDom.innerHTML = '<div class="loading loading_run"></div>';
      layer.appendChild(loadingDom);
      document.querySelector('body').appendChild(layer);
    } else {
      document.querySelector('body').classList.remove('loading_no_scroll');
      var dom = document.querySelector('#loading_layer');
      if (dom) {
        dom.outerHTML = '';
        dom = null;
      }
    }
  }
  window.loading = loading;
})();

