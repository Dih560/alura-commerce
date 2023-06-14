import {useColorScheme as maybeUseColorScheme} from 'react-native';

const fallbackUseColorScheme = () => 'light';
const useColorScheme = maybeUseColorScheme ?? fallbackUseColorScheme;
export default useColorScheme;
