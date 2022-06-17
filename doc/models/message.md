
# Message

## Structure

`Message`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `audio` | [`Audio \| undefined`](../../doc/models/audio.md) | Optional | A media object containing audio. Required when type=audio. |
| `contacts` | [`Contact[] \| undefined`](../../doc/models/contact.md) | Optional | A contact object. Required when type=contacts. |
| `document` | [`Document \| undefined`](../../doc/models/document.md) | Optional | A media object containing a document. Required when type=document. |
| `image` | [`Image \| undefined`](../../doc/models/image.md) | Optional | A media object containing an image. Required when type=image. |
| `interactive` | [`Interactive \| undefined`](../../doc/models/interactive.md) | Optional | This option is used to send List Messages and Reply Buttons. The components of each interactive object generally follow a consistent pattern: header, body, footer, and action. Required when type=interactive. |
| `location` | [`Location \| undefined`](../../doc/models/location.md) | Optional | A location object. Required when type=location. |
| `messagingProduct` | `string` | Required | Messaging service used for the request. |
| `recipientType` | `string \| undefined` | Optional | Currently, you can only send messages to individuals.<br>**Default**: `'individual'` |
| `sticker` | [`Sticker \| undefined`](../../doc/models/sticker.md) | Optional | A media object containing a sticker. Currently, we support inbound both and outbound stickers: For outbound, we only support static third-party stickers. For inbound, we support all types of stickers. The sticker needs to be 512x512 pixels and the file’s size needs to be less than 100 KB. Required when type=sticker. |
| `template` | [`Template \| undefined`](../../doc/models/template.md) | Optional | A template object. Required when type=template. |
| `text` | [`Text \| undefined`](../../doc/models/text.md) | Optional | Required for text messages. |
| `to` | `string` | Required | WhatsApp ID or phone number for the person you want to send a message to. |
| `type` | [`MessageTypeEnum \| undefined`](../../doc/models/message-type-enum.md) | Optional | The type of message you want to send. |
| `video` | [`Video \| undefined`](../../doc/models/video.md) | Optional | A media object containing a video. Required when type=video. |

## Example (as JSON)

```json
{
  "messaging_product": "whatsapp",
  "to": "{{Recipient-Phone-Number}}",
  "type": "template",
  "template": {
    "name": "hello_world",
    "language": {
      "code": "en_US"
    }
  }
}
```

