import Vue from 'vue'

if (process.client) {
  Vue.directive('img-lazy', {
    inserted: async function (el, binding) {
      const imgURL = binding.value;
      if (!imgURL) {
        return;
      }
      if (imgURL) {
        const exist = await imageExist(imgURL);
        if (exist) {
          el.setAttribute('src', imgURL);
        }
      }
    }
  })

  const imgCache = Object.create(null);

  async function imageExist(url) {
    return imgCache[url] ? true : new Promise(resolve => {
      const img = new Image();
      img.onload = function () {
        if (this.complete == true) {
          imgCache[url] = true;
          resolve(true);
        }
      };
      img.onerror = function () {
        resolve(false);
      };
      img.src = url;
    });
  }
}