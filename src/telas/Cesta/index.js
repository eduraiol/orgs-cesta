import { StyleSheet, View } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';

function Cesta ({ topo, detalhes }){
    return (
        <>
            <Topo {...topo} />

            <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
            </View>
        </>
        
    )
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
});

export default Cesta;