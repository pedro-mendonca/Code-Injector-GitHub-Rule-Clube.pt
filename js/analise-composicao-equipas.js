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
	<div class="row painel-row justify-content-center p-0 m-0">

	/*
	<div class="row painel-row justify-content-center p-0 m-0">
		<div class="row col-12 col-sm-10 col-md-8 col-lg-6 painel-score justify-content-center m-3 p-2 card action bg-light text-center">
			<div class="col team1">
			<div class="row">
				<div class="col-12 team-name font-weight-bold h-25 d-inline-block">Paço de Arcos</div>
				<div class="col-12 team-escalao h-25 d-inline-block"></div>
				<div class="col-12 team-score font-weight-bold h-50 d-inline-block">XX</div>
			</div>
			</div>
			<div class="col timer align-self-center">
			<div style="" class="row">
				<div class="col-12 periodo justify-content-center font-weight-bold">P</div>
				<div class="col-12 countdown-timer justify-content-center font-weight-bold">10:00</div>
			</div>
			</div>
				<div class="col team2">
				<div class="row h-auto d-inline-block">
					<div class="col-12 team-name font-weight-bold h-25 d-inline-block">Adversário</div>
					<div class="col-12 team-escalao h-25 d-inline-block"></div>
					<div class="col-12 team-score font-weight-bold h-50 d-inline-block">XX</div>
				</div>
				</div>
			</div>
		</div>
	</div>
	*/
	$( 'div#chrono' ).before( '<div class="row painel-row justify-content-center p-0 m-0"><div class="row col-12 col-sm-10 col-md-8 col-lg-6 painel-score justify-content-center m-3 p-2 card action bg-light text-center"><div class="col team1"><div class="row"><div class="col-12 team-name font-weight-bold h-25 d-inline-block">Paço de Arcos</div><div class="col-12 team-escalao h-25 d-inline-block"></div><div class="col-12 team-score font-weight-bold h-50 d-inline-block">XX</div></div></div><div class="col timer align-self-center"><div style="" class="row"><div class="col-12 periodo justify-content-center font-weight-bold">P</div><div class="col-12 countdown-timer justify-content-center font-weight-bold">10:00</div></div></div><div class="col team2"><div class="row h-auto d-inline-block"><div class="col-12 team-name font-weight-bold h-25 d-inline-block">Adversário</div><div class="col-12 team-escalao h-25 d-inline-block"></div><div class="col-12 team-score font-weight-bold h-50 d-inline-block">XX</div></div></div></div></div></div>' );

	// Capta nomes das equipas em <font>PAC<span>Adversário</font>.
	var score = $( 'div#score font' ).html();
	var equipas = score.split(/<span.+<\/span>/g);
	var equipa1 = equipas[0];
	var equipa2 = equipas[1];
	console.log( equipas );
	$( 'div.team1 div.team-escalao' ).html( equipa1 );
	$( 'div.team2 div.team-name' ).html( equipa2 );

	// Calcula período.
	calculaPeriodo();

	// Calcula tempo decrescente.
	calculaTempo();

	// Calcula pontos equipa 1.
	actualizar( 'div#score font span b:first-child', 'div.team1 div.team-score' );

	// Calcula pontos equipa 2.
	actualizar( 'div#score font span b:last-child', 'div.team2 div.team-score' );

	// Verifica se o período original foi alterado, recalcula.
	$( 'span#timer span.part' ).on('DOMSubtreeModified', function(){
		calculaPeriodo();
	});

	// Verifica se o tempo original foi alterado, recalcula.
	$( 'span#timer span.valuesPartial' ).on('DOMSubtreeModified', function(){
		calculaTempo();
	});

	// Verifica se os pontos da equipa 1 foram alterados, recalcula.
	$( 'div#score font span b:first-child' ).on('DOMSubtreeModified', function(){
		actualizar( 'div#score font span b:first-child', 'div.team1 div.team-score' );
	});

	// Verifica se os pontos da equipa 2 foram alterados, recalcula.
	$( 'div#score font span b:last-child' ).on('DOMSubtreeModified', function(){
		actualizar( 'div#score font span b:last-child', 'div.team2 div.team-score' );
	});

}

function calculaPeriodo() {
	var periodo = $( 'span#timer span.part' ).text();
	var periodo_formatado = periodo.replace( 'P', '' );
	//console.log( periodo );
	$( 'div.painel-score div.timer div.periodo' ).html( periodo_formatado );
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

function actualizar( origem, destino ) {
	$( destino ).html( $( origem ).text() );
}
