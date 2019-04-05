# Format number function

Function to format a decimal number, e.g. **1200.334** formats to **1.200,33**

## Parameters

* **number:** the unformatted number, with a point as decimal separator, e.g. **1200.334**
* **decimals:** the wanted number of decimals, e.g. **2**

## Less decimals than required

If there are less decimals in the unformatted number than required, zeros are added, e.g. **1200.3** formats to **1.200,30** if the decimals parameter is set to **2**

## No decimals

If there are no decimals, none are shown in the formatted result, e.g. **1200** formats to **1.200**, even if the decimals paramater was set to **2** for example