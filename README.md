# curso-vue-udemy
Exercicio do Curso Vue JS 2 - O Guia Completo (incl. Vue Router &amp; Vuex) da UDEMY

---

# Seção 2
- Não é possível te o mesmo nome para um atributo de data e para funções de methods.
- Diretivas:
  - Diretiva é uma propriedade personalizada que não é nativa do HTML;
  - o {{}} é utilizado e insere o conteúdo dentro do HTML em formato de string;
  - As diretivas são utilizadas dentro das tags HTMLs; 

    

## Diretivas
__v-bind:__ liga o que está dentro da instância vue com o template. Exemplo:
```html
<a v-bind:href="link">Googleasdf</a> 
``` 

__v-once__: ele irá colocar atualizar apenas o valor, depois o valor não será mais alterado mesmo modificando o atributo. Mesmo que título for atualizado na instância Vue, ele não será atualizado aqui. Uma vez que ele resolve o valor, ele não vai mais ficar monitorando esse valor.
```
<p v-once>{{titulo}}</p>
```

__v-html:__ Permiti inserir html dentro do template HTML. O Vue ele imprimi o texto e não o HTML. Isso dá uma segurança para evitar ataque com a inserção de código maliciosos
```
<p v-html="nome do atributo"></p>
```

__v-on:__ Quando ocorrer um evento ele é interceptado e a função é executada. Por padrão o evento do elemento HTML, que foi interceptado, é passado para a função. Caso uma variável seja passada é necessário adicionar como parâmetro da função o $event para receber o evento.

---

- 
- 