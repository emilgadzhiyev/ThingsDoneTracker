const Post = Vue.component('done', {
    props: ['donething', 'project'],
    template: '<div class="post"><h3>{{ project }}</h3><p>{{ donething }}</p></div>'
});