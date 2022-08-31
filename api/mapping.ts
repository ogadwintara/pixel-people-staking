import { AirdropMetadata } from './../common/Airdrop'
import { PublicKey } from '@solana/web3.js'
import { ReceiptType } from '@cardinal/staking/dist/cjs/programs/stakePool'

export type StakePoolMetadata = {
  // Name of this stake pool used as an id. Should be in lower-case kebab-case since it is used in the URL as /{name}
  // https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Why-you-should-make-kebab-case-a-URL-naming-convention-best-practice
  name: string
  // Display name to be displayed in the header. Often the same as name but with capital letters and spaces
  displayName: string
  // Publickey for this stake pool
  stakePoolAddress: PublicKey
  // Default receipt type. Setting this will remove the option for the user to choose which receipt type to use
  receiptType?: ReceiptType
  // Optional config to hide this pool from the main page
  hidden?: boolean
  backgroundImage?: string
  // Colors object to style the stake page
  colors?: {
    primary: string
    secondary: string
    accent?: string
    fontColor?: string
  }
  // Image url to be used as the icon in the pool selector and the header
  imageUrl?: string
  // Website url if specified will be navigated to when the image in the header is clicked
  websiteUrl?: string
  // Max staked is used to compute percentage of total staked
  maxStaked?: number
  // Links to show at the top right of the page
  links?: { text: string; value: string }[]
  // On devnet when you click the airdrop button on this page it will clone NFTs with this metadata and airdrop to the user
  airdrops?: AirdropMetadata[]
}

export const defaultSecondaryColor = 'rgba(4, 11, 26)'

export const stakePoolMetadatas: StakePoolMetadata[] = [
  {
    name: 'thesupersol',
    displayName: 'Stake TheSuperSOL',
    stakePoolAddress: new PublicKey(
      'DNHGMhkRiFZsWXGVKHbQVctvDtK7MEvGU9u4vMQ2Qmsh'
    ),
    websiteUrl: 'https://thesupersol.net/',
    links: [
      {
        text: 'Home',
        value: 'https://thesupersol.net',
      },
    ],
    receiptType: ReceiptType.Original,
    maxStaked: 1200,
    imageUrl: 'https://raw.githubusercontent.com/ogadwintara/SOSTOKEN/main/logo192.png',
    backgroundImage: '/8.png',
    colors: {
      primary: '#02060f',
      secondary: '#040b1a',
      accent: '#ffc107',
      fontColor: '#fffff',
    },
  },
]
