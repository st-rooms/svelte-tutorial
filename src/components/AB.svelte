<!-- svelte 방식 -->
let a = 1;
 let b = 2;
<!-- react 방식 -->
export default () => {
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);
  ...
  }
  
  <!-- // vue -->
  export default {
      data: function() {
        return {
          a: 1,
          b: 2
        };
      }
    };