/**
 * JavaScript para a tabela Análise > Composição de Equipas.
 *
 * Documentação: https://github.com/pedro-mendonca/Code-Injector-GitHub-Rule-Clube.pt
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
