/**
 * @typedef {number} EpochSeconds Unix timestamp in seconds
 */

/**
 * @typedef {number} Milliseconds Duration in milliseconds
 */

/**
 * @typedef {number} MilliVolts Voltage in millivolts
 */

/**
 * @typedef {0 | 1 | 2} TxtType Text message type: 0=Plain, 1=CliData, 2=SignedPlain
 */

/**
 * Information about the connected MeshCore device/node.
 * @typedef {object} SelfInfo
 * @property {number} type
 * @property {number} txPower
 * @property {number} maxTxPower
 * @property {Uint8Array} publicKey
 * @property {number} advLat
 * @property {number} advLon
 * @property {Uint8Array} reserved
 * @property {number} manualAddContacts
 * @property {number} radioFreq
 * @property {number} radioBw
 * @property {number} radioSf
 * @property {number} radioCr
 * @property {string} name
 */

/**
 * A known contact on the mesh network.
 * @typedef {object} Contact
 * @property {Uint8Array} publicKey
 * @property {number} type
 * @property {number} flags
 * @property {number} outPathLen
 * @property {Uint8Array} outPath
 * @property {string} advName
 * @property {EpochSeconds} lastAdvert
 * @property {number} advLat
 * @property {number} advLon
 * @property {EpochSeconds} lastMod
 */

/**
 * A direct message received from a contact.
 * @typedef {object} ContactMessage
 * @property {Uint8Array} pubKeyPrefix
 * @property {number} pathLen
 * @property {TxtType} txtType
 * @property {EpochSeconds} senderTimestamp
 * @property {string} text
 */

/**
 * A message received on a channel.
 * @typedef {object} ChannelMessage
 * @property {number} channelIdx
 * @property {number} pathLen
 * @property {TxtType} txtType
 * @property {EpochSeconds} senderTimestamp
 * @property {string} text
 */

/**
 * Channel configuration details.
 * @typedef {object} ChannelInfo
 * @property {number} channelIdx
 * @property {string} name
 * @property {Uint8Array} secret
 */

/**
 * Response after sending a message, containing delivery status and timeout estimate.
 * @typedef {object} SentResponse
 * @property {number} result
 * @property {number} expectedAckCrc
 * @property {Milliseconds} estTimeout
 */

/**
 * Hardware and firmware information about the connected device.
 * @typedef {object} DeviceInfo
 * @property {number} firmwareVer
 * @property {Uint8Array} reserved
 * @property {string} firmware_build_date
 * @property {string} manufacturerModel
 */

/**
 * Battery voltage reading from the device.
 * @typedef {object} BatteryVoltageResponse
 * @property {MilliVolts} batteryMilliVolts
 */

/**
 * Exported contact as raw advert packet bytes.
 * @typedef {object} ExportContactResponse
 * @property {Uint8Array} advertPacketBytes
 */

/**
 * Exported private key from the device.
 * @typedef {object} PrivateKeyResponse
 * @property {Uint8Array} privateKey
 */

/**
 * Statistics from a repeater node (battery, traffic counters, air time, etc.).
 * @typedef {object} RepeaterStats
 * @property {MilliVolts} batt_milli_volts
 * @property {number} curr_tx_queue_len
 * @property {number} noise_floor
 * @property {number} last_rssi
 * @property {number} n_packets_recv
 * @property {number} n_packets_sent
 * @property {number} total_air_time_secs
 * @property {number} total_up_time_secs
 * @property {number} n_sent_flood
 * @property {number} n_sent_direct
 * @property {number} n_recv_flood
 * @property {number} n_recv_direct
 * @property {number} err_events
 * @property {number} last_snr
 * @property {number} n_direct_dups
 * @property {number} n_flood_dups
 */

/**
 * Result of syncing the next pending message from the device.
 * @typedef {object} SyncMessageResult
 * @property {ContactMessage} [contactMessage]
 * @property {ChannelMessage} [channelMessage]
 */

/**
 * A nearby node discovered via radio.
 * @typedef {object} Neighbour
 * @property {Uint8Array} publicKeyPrefix
 * @property {number} heardSecondsAgo
 * @property {number} snr
 */

/**
 * List of nearby nodes and total count.
 * @typedef {object} NeighboursResult
 * @property {number} totalNeighboursCount
 * @property {Neighbour[]} neighbours
 */

/**
 * Trace path data received from a trace route request.
 * @typedef {object} TraceDataResult
 * @property {number} reserved
 * @property {number} pathLen
 * @property {number} flags
 * @property {number} tag
 * @property {number} authCode
 * @property {Uint8Array} pathHashes
 * @property {Uint8Array} pathSnrs
 * @property {number} lastSnr
 */

/**
 * Parsed advertisement data from a node's advert packet.
 * @typedef {object} AdvertParsedData
 * @property {"NONE" | "CHAT" | "REPEATER" | "ROOM" | null} type
 * @property {number | null} lat
 * @property {number | null} lon
 * @property {string | null} name
 * @property {number | null} feat1
 * @property {number | null} feat2
 */

/**
 * A single Cayenne LPP telemetry entry.
 * @typedef {object} CayenneTelemetryEntry
 * @property {number} channel
 * @property {number} type
 * @property {number | {latitude: number, longitude: number, altitude: number}} value
 */

/**
 * Push notification when a login to a repeater/room succeeds.
 * @typedef {object} LoginSuccessPush
 * @property {number} reserved
 * @property {Uint8Array} pubKeyPrefix
 */

/**
 * Push notification containing a status response from a repeater/room.
 * @typedef {object} StatusResponsePush
 * @property {number} reserved
 * @property {Uint8Array} pubKeyPrefix
 * @property {Uint8Array} statusData
 */

/**
 * Push notification with raw data received from the radio.
 * @typedef {object} RawDataPush
 * @property {number} lastSnr
 * @property {number} lastRssi
 * @property {number} reserved
 * @property {Uint8Array} payload
 */

/**
 * Push notification confirming a sent message was acknowledged.
 * @typedef {object} SendConfirmedPush
 * @property {number} ackCode
 * @property {Milliseconds} roundTrip
 */

/**
 * Push notification with logged received radio data.
 * @typedef {object} LogRxDataPush
 * @property {number} lastSnr
 * @property {number} lastRssi
 * @property {Uint8Array} raw
 */

/**
 * Push notification containing telemetry sensor data from a node.
 * @typedef {object} TelemetryResponsePush
 * @property {number} reserved
 * @property {Uint8Array} pubKeyPrefix
 * @property {Uint8Array} lppSensorData
 */

/**
 * Push notification containing a binary response from a node.
 * @typedef {object} BinaryResponsePush
 * @property {number} reserved
 * @property {number} tag
 * @property {Uint8Array} responseData
 */

/**
 * Push notification when a new contact advertisement is received (manual add mode).
 * @typedef {object} NewAdvertPush
 * @property {Uint8Array} publicKey
 * @property {number} type
 * @property {number} flags
 * @property {number} outPathLen
 * @property {Uint8Array} outPath
 * @property {string} advName
 * @property {EpochSeconds} lastAdvert
 * @property {number} advLat
 * @property {number} advLon
 * @property {EpochSeconds} lastMod
 */

/**
 * Push notification when a contact advertisement is auto-added.
 * @typedef {object} AdvertPush
 * @property {Uint8Array} publicKey
 */

/**
 * Push notification when a contact's path is updated.
 * @typedef {object} PathUpdatedPush
 * @property {Uint8Array} publicKey
 */

/**
 * Push notification indicating messages are waiting to be synced.
 * @typedef {object} MsgWaitingPush
 */

/**
 * Response indicating the start of a contacts list.
 * @typedef {object} ContactsStartResponse
 * @property {number} count
 */

/**
 * Response indicating the end of a contacts list.
 * @typedef {object} EndOfContactsResponse
 * @property {EpochSeconds} mostRecentLastmod
 */

/**
 * Response containing the current device time.
 * @typedef {object} CurrTimeResponse
 * @property {EpochSeconds} epochSecs
 */

/**
 * Response indicating no more messages to sync.
 * @typedef {object} NoMoreMessagesResponse
 */

/**
 * OK response from the device.
 * @typedef {object} OkResponse
 */

/**
 * Error response from the device.
 * @typedef {object} ErrResponse
 * @property {number | null} errCode
 */

/**
 * Response indicating the device/feature is disabled.
 * @typedef {object} DisabledResponse
 */

/**
 * Response indicating signing can start.
 * @typedef {object} SignStartResponse
 * @property {number} reserved
 * @property {number} maxSignDataLen
 */

/**
 * Response containing a cryptographic signature.
 * @typedef {object} SignatureResponse
 * @property {Uint8Array} signature
 */

export {};
