// components/Hello.tsx
import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"

export interface IProps {
  name: string
  enthusiasmLevel?: number
  onIncrement?: () => void
  onDecrement?: () => void
}

interface IState {
  enthusiasmLevel: number
}

export class Hello extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    if ((props.enthusiasmLevel || 0) <= 0) {
      throw new Error("You could be a little more enthusiastic. :D")
    }

    this.state = {
      enthusiasmLevel: props.enthusiasmLevel || 1
    }
  }

  public render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          Hello {this.props.name + this.getExclamationMarks(this.state.enthusiasmLevel)}
        </Text>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={this.onDecrement}
              accessibilityLabel="decrement"
              color="red"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="+"
              onPress={this.onIncrement}
              accessibilityLabel="increment"
              color="blue"
            />
          </View>
        </View>
      </View>
    )
  }
  private onIncrement = () => this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 });
  private onDecrement = () => this.setState({ enthusiasmLevel: this.state.enthusiasmLevel - 1 });
  private getExclamationMarks = (numChars: number) => Array(numChars + 1).join("!")
}

// styles

const styles = StyleSheet.create({
  button: {
    flex: 1,
    paddingVertical: 0
  },
  buttons: {
    alignItems: "stretch",
    alignSelf: "center",
    borderWidth: 5,
    flexDirection: "row",
    minHeight: 70,
  },
  greeting: {
    color: "#999",
    fontWeight: "bold"
  },
  root: {
    alignItems: "center",
    alignSelf: "center"
  },
})

export default Hello;
