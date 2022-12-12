# curso-vue-udemy
Exercicio do Curso Vue JS 2 - O Guia Completo (incl. Vue Router &amp; Vuex) da UDEMY

# Outras referências

__Guia Vue:__ https://br.vuejs.org/v2/guide/  
__Jinja:__ https://jinja.palletsprojects.com/en/3.1.x/  
__Flask + VueJS:__ https://www.youtube.com/watch?v=8ULr2J-Ymlo&t=27s  

---

# Seção 2
- Não é possível te o mesmo nome para um atributo de data e para funções de methods.
- Diretivas:
  - Diretiva é uma propriedade personalizada que não é nativa do HTML;
  - o {{}} é utilizado e insere o conteúdo dentro do HTML em formato de string;
  - As diretivas são utilizadas dentro das tags HTMLs; 

    

## Diretivas
__Referência:__ https://vuejs.org/api/built-in-directives.html   

__v-bind:__ Sintaxe reduzida __pode-se retirar o v-bind. Ex: :value, :href__:liga o que está dentro da instância vue com o template. Caminho único, quando atualiza o valor do template não atualiza o valor da vue instance (neste caso ver v-model).   
Exemplo:
```html
<a v-bind:href="link">Googleasdf</a> 
``` 

__v-model:__ ao contrário do v-bind, o v-model é um caminho de duas vias. Quando o valor da vue instance é atualizado ele atualiza o template (assim como o v-bind). Além disso, caso o template for atualizado ele atualiza também a vue instance.  

__v-once:__ __ Sintaxe reduzida __@__: ele irá colocar atualizar apenas o valor, depois o valor não será mais alterado mesmo modificando o atributo. Mesmo que título for atualizado na instância Vue, ele não será atualizado aqui. Uma vez que ele resolve o valor, ele não vai mais ficar monitorando esse valor.
```
<p v-once>{{titulo}}</p>
```

__v-html:__ Permiti inserir html dentro do template HTML. O Vue ele imprimi o texto e não o HTML. Isso dá uma segurança para evitar ataque com a inserção de código maliciosos
```
<p v-html="nome do atributo"></p>
```

__v-on:__ Você pode usar a diretiva v-on para escutar eventos do DOM e rodar algum JavaScript quando tal evento for disparado.  Quando ocorrer um evento ele é interceptado e a função é executada. Por padrão o evento do elemento HTML, que foi interceptado, é passado para a função. Caso uma variável seja passada é necessário adicionar como parâmetro da função o $event para receber o evento.   

---

## Dados computados

Dados computador são métodos getter que  utilizam cache para armazenar o resultado e só são atualizados quando alguma dependência deles é alterada. A diferença para o uso de métodos é que dados computados são cacheados de acordo com suas dependências reativas. Um dado computado somente será reavaliado quando alguma de suas dependências for alterada.

Propriedades computadas são chamadas como métodos no HTML e não como funções.

Os dados computadotados são resultado de forma síncrona. Quando alguma dependência reativa é alterada ele retorna um resultado. O __watch__ trabalha de forma assíncrona, quando se deseja monitorar alguma variável e ver algo em respostas a essas alterações.
