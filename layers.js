var wms_layers = [];

var format_reodovias_brasil_0 = new ol.format.GeoJSON();
var features_reodovias_brasil_0 = format_reodovias_brasil_0.readFeatures(json_reodovias_brasil_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reodovias_brasil_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reodovias_brasil_0.addFeatures(features_reodovias_brasil_0);
var lyr_reodovias_brasil_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reodovias_brasil_0, 
                style: style_reodovias_brasil_0,
                popuplayertitle: 'reodovias_brasil',
                interactive: true,
                title: '<img src="styles/legend/reodovias_brasil_0.png" /> reodovias_brasil'
            });
var format_am_hidrovias_1 = new ol.format.GeoJSON();
var features_am_hidrovias_1 = format_am_hidrovias_1.readFeatures(json_am_hidrovias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_am_hidrovias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_am_hidrovias_1.addFeatures(features_am_hidrovias_1);
var lyr_am_hidrovias_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_am_hidrovias_1, 
                style: style_am_hidrovias_1,
                popuplayertitle: 'am_hidrovias',
                interactive: true,
                title: '<img src="styles/legend/am_hidrovias_1.png" /> am_hidrovias'
            });
var format_BR_Municipios_2023_2 = new ol.format.GeoJSON();
var features_BR_Municipios_2023_2 = format_BR_Municipios_2023_2.readFeatures(json_BR_Municipios_2023_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BR_Municipios_2023_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BR_Municipios_2023_2.addFeatures(features_BR_Municipios_2023_2);
var lyr_BR_Municipios_2023_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BR_Municipios_2023_2, 
                style: style_BR_Municipios_2023_2,
                popuplayertitle: 'BR_Municipios_2023',
                interactive: true,
                title: '<img src="styles/legend/BR_Municipios_2023_2.png" /> BR_Municipios_2023'
            });
var format_BR_Regioes_2023_3 = new ol.format.GeoJSON();
var features_BR_Regioes_2023_3 = format_BR_Regioes_2023_3.readFeatures(json_BR_Regioes_2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BR_Regioes_2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BR_Regioes_2023_3.addFeatures(features_BR_Regioes_2023_3);
var lyr_BR_Regioes_2023_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BR_Regioes_2023_3, 
                style: style_BR_Regioes_2023_3,
                popuplayertitle: 'BR_Regioes_2023',
                interactive: true,
                title: '<img src="styles/legend/BR_Regioes_2023_3.png" /> BR_Regioes_2023'
            });
var format_ies_4 = new ol.format.GeoJSON();
var features_ies_4 = format_ies_4.readFeatures(json_ies_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ies_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ies_4.addFeatures(features_ies_4);
var lyr_ies_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ies_4, 
                style: style_ies_4,
                popuplayertitle: 'ies',
                interactive: true,
                title: '<img src="styles/legend/ies_4.png" /> ies'
            });

lyr_reodovias_brasil_0.setVisible(true);lyr_am_hidrovias_1.setVisible(true);lyr_BR_Municipios_2023_2.setVisible(true);lyr_BR_Regioes_2023_3.setVisible(true);lyr_ies_4.setVisible(true);
var layersList = [lyr_reodovias_brasil_0,lyr_am_hidrovias_1,lyr_BR_Municipios_2023_2,lyr_BR_Regioes_2023_3,lyr_ies_4];
lyr_reodovias_brasil_0.set('fieldAliases', {'id_trecho_': 'id_trecho_', 'vl_br': 'vl_br', 'sg_uf': 'sg_uf', 'nm_tipo_tr': 'nm_tipo_tr', 'sg_tipo_tr': 'sg_tipo_tr', 'desc_coinc': 'desc_coinc', 'vl_codigo': 'vl_codigo', 'ds_local_i': 'ds_local_i', 'ds_local_f': 'ds_local_f', 'vl_km_inic': 'vl_km_inic', 'vl_km_fina': 'vl_km_fina', 'vl_extensa': 'vl_extensa', 'ds_sup_fed': 'ds_sup_fed', 'ds_obra': 'ds_obra', 'ds_coinc': 'ds_coinc', 'ds_tipo_ad': 'ds_tipo_ad', 'ds_ato_leg': 'ds_ato_leg', 'est_coinc': 'est_coinc', 'sup_est_co': 'sup_est_co', 'ds_jurisdi': 'ds_jurisdi', 'ds_superfi': 'ds_superfi', 'ds_legenda': 'ds_legenda', 'sg_legenda': 'sg_legenda', 'leg_multim': 'leg_multim', 'versao_snv': 'versao_snv', 'id_versao': 'id_versao', 'marcador': 'marcador', });
lyr_am_hidrovias_1.set('fieldAliases', {'idhidrovia': 'idhidrovia', 'nome': 'nome', 'tipo': 'tipo', 'extensao': 'extensao', 'cla_icacao': 'cla_icacao', 'nome_rio': 'nome_rio', 'jurisdicao': 'jurisdicao', 'reg_rafica': 'reg_rafica', 'idm_origem': 'idm_origem', 'mun_origem': 'mun_origem', 'est_origem': 'est_origem', 'idm_estino': 'idm_estino', 'mun_estino': 'mun_estino', 'est_estino': 'est_estino', 'estudos': 'estudos', 'st_length_': 'st_length_', });
lyr_BR_Municipios_2023_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'CD_CONCURB': 'CD_CONCURB', 'NM_CONCURB': 'NM_CONCURB', 'AREA_KM2': 'AREA_KM2', });
lyr_BR_Regioes_2023_3.set('fieldAliases', {'CD_REGIAO': 'CD_REGIAO', 'NM_REGIAO': 'NM_REGIAO', 'SIGLA_RG': 'SIGLA_RG', 'AREA_KM2': 'AREA_KM2', });
lyr_ies_4.set('fieldAliases', {'NM_MUNICIPIO_IES': 'NM_MUNICIPIO_IES', 'NM_ENTIDADE_ENSINO': 'NM_ENTIDADE_ENSINO', 'Contagem de NR_DOCUMENTO': 'Contagem de NR_DOCUMENTO', 'LAT': 'LAT', 'LONG': 'LONG', });
lyr_reodovias_brasil_0.set('fieldImages', {'id_trecho_': 'Range', 'vl_br': 'TextEdit', 'sg_uf': 'TextEdit', 'nm_tipo_tr': 'TextEdit', 'sg_tipo_tr': 'TextEdit', 'desc_coinc': 'TextEdit', 'vl_codigo': 'TextEdit', 'ds_local_i': 'TextEdit', 'ds_local_f': 'TextEdit', 'vl_km_inic': 'TextEdit', 'vl_km_fina': 'TextEdit', 'vl_extensa': 'TextEdit', 'ds_sup_fed': 'TextEdit', 'ds_obra': 'TextEdit', 'ds_coinc': 'TextEdit', 'ds_tipo_ad': 'TextEdit', 'ds_ato_leg': 'TextEdit', 'est_coinc': 'TextEdit', 'sup_est_co': 'TextEdit', 'ds_jurisdi': 'TextEdit', 'ds_superfi': 'TextEdit', 'ds_legenda': 'TextEdit', 'sg_legenda': 'TextEdit', 'leg_multim': 'TextEdit', 'versao_snv': 'TextEdit', 'id_versao': 'Range', 'marcador': 'TextEdit', });
lyr_am_hidrovias_1.set('fieldImages', {'idhidrovia': 'TextEdit', 'nome': 'TextEdit', 'tipo': 'TextEdit', 'extensao': 'TextEdit', 'cla_icacao': 'TextEdit', 'nome_rio': 'TextEdit', 'jurisdicao': 'TextEdit', 'reg_rafica': 'TextEdit', 'idm_origem': 'TextEdit', 'mun_origem': 'TextEdit', 'est_origem': 'TextEdit', 'idm_estino': 'TextEdit', 'mun_estino': 'TextEdit', 'est_estino': 'TextEdit', 'estudos': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_BR_Municipios_2023_2.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'CD_REGIAO': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'CD_CONCURB': 'TextEdit', 'NM_CONCURB': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_BR_Regioes_2023_3.set('fieldImages', {'CD_REGIAO': 'TextEdit', 'NM_REGIAO': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_ies_4.set('fieldImages', {'NM_MUNICIPIO_IES': 'TextEdit', 'NM_ENTIDADE_ENSINO': 'TextEdit', 'Contagem de NR_DOCUMENTO': 'Range', 'LAT': 'TextEdit', 'LONG': 'TextEdit', });
lyr_reodovias_brasil_0.set('fieldLabels', {'id_trecho_': 'no label', 'vl_br': 'no label', 'sg_uf': 'no label', 'nm_tipo_tr': 'no label', 'sg_tipo_tr': 'no label', 'desc_coinc': 'no label', 'vl_codigo': 'no label', 'ds_local_i': 'no label', 'ds_local_f': 'no label', 'vl_km_inic': 'no label', 'vl_km_fina': 'no label', 'vl_extensa': 'no label', 'ds_sup_fed': 'no label', 'ds_obra': 'no label', 'ds_coinc': 'no label', 'ds_tipo_ad': 'no label', 'ds_ato_leg': 'no label', 'est_coinc': 'no label', 'sup_est_co': 'no label', 'ds_jurisdi': 'no label', 'ds_superfi': 'no label', 'ds_legenda': 'no label', 'sg_legenda': 'no label', 'leg_multim': 'no label', 'versao_snv': 'no label', 'id_versao': 'no label', 'marcador': 'no label', });
lyr_am_hidrovias_1.set('fieldLabels', {'idhidrovia': 'no label', 'nome': 'no label', 'tipo': 'no label', 'extensao': 'no label', 'cla_icacao': 'no label', 'nome_rio': 'no label', 'jurisdicao': 'no label', 'reg_rafica': 'no label', 'idm_origem': 'no label', 'mun_origem': 'no label', 'est_origem': 'no label', 'idm_estino': 'no label', 'mun_estino': 'no label', 'est_estino': 'no label', 'estudos': 'no label', 'st_length_': 'no label', });
lyr_BR_Municipios_2023_2.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'CD_REGIAO': 'no label', 'NM_REGIAO': 'no label', 'CD_CONCURB': 'no label', 'NM_CONCURB': 'no label', 'AREA_KM2': 'no label', });
lyr_BR_Regioes_2023_3.set('fieldLabels', {'CD_REGIAO': 'no label', 'NM_REGIAO': 'no label', 'SIGLA_RG': 'no label', 'AREA_KM2': 'no label', });
lyr_ies_4.set('fieldLabels', {'NM_MUNICIPIO_IES': 'hidden field', 'NM_ENTIDADE_ENSINO': 'no label', 'Contagem de NR_DOCUMENTO': 'hidden field', 'LAT': 'no label', 'LONG': 'no label', });
lyr_ies_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});