/* ── Função: navegar entre páginas ──────────────

       1. Esconde TODAS as páginas removendo a classe "ativa"
       2. Remove o destaque de TODOS os botões do menu
       3. Mostra apenas a página escolhida (adiciona "ativa")
       4. Destaca apenas o botão correspondente (adiciona "ativo")
    */
    function navegar(pagina) {

      // 1. Esconde todas as páginas
      document.querySelectorAll('.pagina').forEach(function(p) {
        p.classList.remove('ativa');
      });

      // 2. Remove destaque de todos os botões
      document.querySelectorAll('nav button').forEach(function(b) {
        b.classList.remove('ativo');
      });

      // 3. Mostra a página escolhida
      document.getElementById('pagina-' + pagina).classList.add('ativa');

      // 4. Destaca o botão escolhido
      document.getElementById('btn-' + pagina).classList.add('ativo');
    }


    /* ── Função: salvar ─────────────────────────────

       Valida se os campos obrigatórios foram preenchidos,
       exibe mensagem de sucesso e limpa o formulário.
    */
    function salvar() {
      var nome = document.getElementById('nome').value;
      var cpf  = document.getElementById('cpf').value;

      // Validação simples
      if (nome === '' || cpf === '') {
        alert('Preencha pelo menos o Nome e o CPF.');
        return;
      }

      // Exibe a mensagem de sucesso
      document.getElementById('mensagem').style.display = 'block';

      // Oculta a mensagem após 3 segundos
      setTimeout(function() {
        document.getElementById('mensagem').style.display = 'none';
      }, 3000);
    }


    /* ── Função: limpar ─────────────────────────────

       Apaga o conteúdo de todos os campos do formulário
       de leitor e oculta a mensagem de sucesso.
    */
    function limpar() {
      document.getElementById('nome').value      = '';
      document.getElementById('cpf').value       = '';
      document.getElementById('nascimento').value = '';
      document.getElementById('email').value     = '';
      document.getElementById('telefone').value  = '';
      document.getElementById('tipo').value      = '';
      document.getElementById('situacao').selectedIndex = 0;
      document.getElementById('mensagem').style.display = 'none';
    }