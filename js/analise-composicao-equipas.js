/**
 * JavaScript para a tabela Análise > Composição de Equipas.
 *
 * Documentação: https://github.com/pedro-mendonca/Code-Injector-GitHub-Rule-Clube.pt
 * Compatível com a webapp Clube.pt v.29102021.1508.
 */

// Verificar se é Composição de Equipas.
$( "body div.body-content h3:contains('Composição de Equipas')" )
	// Adiciona classe 'composicao-equipas' ao resultado.
	.siblings( 'div#Resultados' ).addClass( "composicao-equipas" )
;

// Verificar se é Equipas da Época.
$( "body div.body-content h3:contains('Equipas da Época')" )
	// Adiciona classe 'equipas-epoca' ao resultado.
	.siblings( 'div#tabela_wrapper' ).addClass( "equipas-epoca" )
;

// Atribuir classe 'cabecalho' ao cabeçalho da tabela.
$( "div#Resultados.composicao-equipas table#tabela tbody tr" )
	.first().addClass( "cabecalho" )
;

// Colunas a esconder.
var colunas = [
	'Modalidade',
	'Equipa',
	'Licença',
	'Validade Exame Médico',
	'Aniversário',
];

var indexColunas = [];
$.each( colunas, function( index, value ) {
	indexColunas.push( $( "#Resultados.composicao-equipas #tabela tbody tr.cabecalho td:contains('" + value + "')" ).index() );
});

// Esconder colunas desnecessárias.
$.each( indexColunas, function( index, value ) {
	var value = value + 1;
	$( "#Resultados.composicao-equipas #tabela tbody tr td:nth-child(" + value + ")" )
	.addClass( 'esconder' )
});

$( "#Resultados.composicao-equipas #tabela tbody tr td:contains('Atleta')" )
	.closest( 'tr' ).addClass( "atleta" )
;

// Campos da camisola.
var colunasCamisola = [
	'nº Camisola',
	'Nome Camisola',
];


// Atribuir classe 'camisola' aos campos da camisola.
var indexColunasCamisola = [];
$.each( colunasCamisola, function( index, value ) {
	indexColunasCamisola.push( $( "#Resultados.composicao-equipas #tabela tbody tr.cabecalho td:contains('" + value + "')" ).index() );
});
$.each( indexColunasCamisola, function( index, value ) {
	var value = value + 1;

	$( "#Resultados.composicao-equipas #tabela tbody tr td:nth-child(" + value + ")" )
	.addClass( 'camisola' )
});


// Verificar se cada camisola existe.
$( 'td.camisola' ).each(function () {

	// Obter html da célula.
	var html = $(this).html();

	// Eliminar espaços em branco e quebras de linha.
	var trimhtml = html.trim();

	// Reatribuir o html da célula.
	$( this ).html( trimhtml );

	// Atribuir classe 'existe' se a célula não estiver vazia.
	if ( ! $( this ).is( ':empty' ) ) {
		$( this ).addClass( 'existe' )
	}

});



/**
 * Estatísticas.
 */
// Verificar se cada camisola existe.
/* <i class="fa fa-bar-chart fa-lg"></i>*/

// Verificar se é página de estatísticas de jogo.
$( "body div.body-content div.sub-header div.float-left h5:contains('Em Jogo') div#PlayersList" )
	console.log( 'Página de estatísticas');
	paginaEstatistica();
;


function paginaEstatistica() {
	// Adiciona classe 'jogo-estatisticas' à tabela.
	$( 'div#PlayersList' )
		.closest( "div.row" )
		.addClass( "jogo-estatisticas" )
	;

	// Adiciona classe 'botao-estatisticas' aos botões de acções.
	$( 'div.jogo-estatisticas > div:not(#PlayersList)' )
		.children()
		/*.css(
			{
				"backgroundColor": "yellow",
				"color": "blue"
			}
		)*/
		.addClass( "botao-estatisticas" )
	;

	var botoes = {
		'LLC': '1 Pts <i class="fa fa-check" style="color: green;"></i>',
		'L2C': '2 Pts <i class="fa fa-check" style="color: green;"></i>',
		'L3C': '3 Pts <i class="fa fa-check" style="color: green;"></i>',
		'RD': 'Ressalt. Defens.',
		'AST': 'Assist.',
		'RB': 'Roubo Bola',
		// 'RB': 'Roubo <i class="fas fa-basketball-ball" style="color: green;"></i>', /* Font Awesome 5. */
		'FC': 'Falta Comet.',
		'LLT': '1 Pts <i class="fa fa-times" style="color: red;"></i>',
		'L2T': '2 Pts <i class="fa fa-times" style="color: red;"></i>',
		'L3T': '3 Pts <i class="fa fa-times" style="color: red;"></i>',
		'RO': 'Ressalt. Ofens.',
		'DL': 'Desarm. Lançam.',
		'PB': 'Perda Bola',
		// 'PB': 'Perda <i class="fas fa-basketball-ball" style="color: red;"></i>', /* Font Awesome 5. */
		'FS': 'Falta Sofrida',
	};

	$( 'div.botao-estatisticas div.card-body' ).each( function() {
		// Obter html do botão.
		var html = $(this).html();
		// Eliminar espaços em branco e quebras de linha.
		var trimhtml = html.trim();
		// Definir nova legenda do botão.
		$( this ).html( botoes[trimhtml] );
	} );

	// Adiciona div de tempo decrescente.
	$( 'div#chrono' ).before( '<div class="row painel-row justify-content-center"><div class="row col-sm-8 col-md-6 painel-score justify-content-center m-3 p-3 card action bg-light text-center"><div class="row col-12 countdown-timer justify-content-center font-weight-bold">00:00</div><div class="row col-12 teams-row justify-content-center align-items-center"><div class="row col-5 team-pac"><div class="col-12 team-name">Paço de Arcos</div><div class="col-12 team-score">XX</div></div><div class="row col-2 justify-content-center">X</div><div class="row col-5 team-adversario"><div class="col-12 team-name">Adversário</div><div class="col-12 team-score">XX</div></div></div></div></div>' );

	// Calcula tempo decrescente.
	calculaTempo();

	// Verifica se o tempo original foi alterado, recalcula.
	$( 'span#timer span.valuesPartial' ).on('DOMSubtreeModified', function(){
		calculaTempo();
	});

}

function calculaTempo() {
	var time = $( 'span#timer span.valuesPartial' ).text();
	var time_split = time.split( ':' );
	var segundos = 60 * parseInt( time_split[0] ) + parseInt( time_split[1] );
	var segundos_restantes = 600 - segundos;
	var tempo_restante_formatado = new Date( segundos_restantes * 1000 ).toISOString().substr( 14, 5 );
	//console.log( 'Segundos: ' + ( 60 * parseInt( time_split[0] ) ) );
	//console.log( 'Faltam: ' + segundos_restantes );
	$( 'div.countdown-timer' ).html( tempo_restante_formatado );
}
