import React, { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { Header, HeaderProps } from "../components"

/**
 * A hook that can be used to easily set the Header of a react-navigation screen from within the screen's component.
 *
 * - [Documentation and Examples](https://docs.infinite.red/ignite-cli/Boilerplate/app/utils/useHeader.ts.md)
 */
export function useHeader(
  headerProps: HeaderProps,
  deps: Parameters<typeof useLayoutEffect>[1] = [],
) {
  const navigation = useNavigation()

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header {...headerProps} />,
    })
  }, [...deps, navigation])
}
