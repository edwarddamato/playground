var component = require('./src/components/my-component/index');
 
component.renderSync({ label: 'Marko' })
    .appendTo(document.body);