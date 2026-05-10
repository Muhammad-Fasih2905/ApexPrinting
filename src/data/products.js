import MainHeroImages from '../assets/3dDesgins.png'
import MainHeroImages1 from '../assets/3dDesgins2.png'
import MainHeroImages2 from '../assets/3dDesgins3.png'
import MainHeroImages3 from '../assets/3dDesgins4.avif'
import businessCard from '../assets/businessCard.png'
import businessCard1 from '../assets/businessCard1.png'
import businessCard2 from '../assets/businessCard2.png'
import businessCard3 from '../assets/businessCard3.png'
import businessCard4 from '../assets/businessCard4.png'
import Posters from '../assets/Posters.png'
import Posters1 from '../assets/Posters1.png'
import Posters2 from '../assets/Posters2.png'
import Posters3 from '../assets/Posters3.png'
import PresentationFolder from '../assets/PresentationFolder.png'
import PresentationFolder1 from '../assets/PresentationFolder1.png'
import PresentationFolder2 from '../assets/PresentationFolder2.png'
import PresentationFolder3 from '../assets/PresentationFolder3.png'
import PresentationFolder4 from '../assets/PresentationFolder4.png'
import Letterhead from '../assets/Letterhead.png'
import Letterhead1 from '../assets/Letterhead1.png'
import Letterhead2 from '../assets/Letterhead2.png'
import Letterhead3 from '../assets/Letterhead3.png'
import Envelopes from '../assets/Envelopes.png'
import Envelopes1 from '../assets/Envelopes1.png'
import Envelopes2 from '../assets/Envelopes2.png'
import Envelopes3 from '../assets/Envelopes3.png'
import Envelopes4 from '../assets/Envelopes4.png'
import Envelopes5 from '../assets/Envelopes5.png'
import Envelopes6 from '../assets/Envelopes6.png'
import Notepads from '../assets/Notepads.png'
import Notepads1 from '../assets/Notepads1.png'
import Notepads2 from '../assets/Notepads2.png'
import Notepads3 from '../assets/Notepads3.png'
import Notepads4 from '../assets/Notepads4.png'
import Notepads5 from '../assets/Notepads5.png'
import Brochure from '../assets/Brochure.png'
import Brochure1 from '../assets/Brochure1.png'
import Brochure2 from '../assets/Brochure2.png'
import Brochure3 from '../assets/Brochure3.png'
import Brochure4 from '../assets/Brochure4.png'
import Brochure5 from '../assets/Brochure5.png'
import Booklet from '../assets/Booklet.png'
import Booklet1 from '../assets/Booklet1.png'
import Booklet2 from '../assets/Booklet2.png'
import Booklet3 from '../assets/Booklet3.png'
import Booklet4 from '../assets/Booklet4.png'
import Booklet5 from '../assets/Booklet5.png'
import PromotionalPads from '../assets/PromotionalPads.png'
import PromotionalPads1 from '../assets/PromotionalPads1.png'
import PromotionalPads2 from '../assets/PromotionalPads2.png'
import PromotionalPads3 from '../assets/PromotionalPads3.png'
import Ncrforms from '../assets/Ncrforms.png'
import Ncrforms1 from '../assets/Ncrforms1.png'
import Ncrforms2 from '../assets/Ncrforms2.png'
import Ncrforms3 from '../assets/Ncrforms3.png'
import Ncrforms4 from '../assets/Ncrforms4.png'
import PaperBags from '../assets/PaperBags.png'
import PaperBags1 from '../assets/PaperBags1.png'
import PaperBags2 from '../assets/PaperBags2.png'
import PaperBags3 from '../assets/PaperBags3.png'
import PaperBags4 from '../assets/PaperBags4.png'
import Flyer from '../assets/Flyer.png'
import Flyer1 from '../assets/Flyer1.png'
import Flyer2 from '../assets/Flyer2.png'


export const PRODUCTS = {
    'Business Cards': {
        basePrice: 14.99,
        desc: 'Make a lasting first impression with premium business cards. Choose from luxury finishes, special effects, and multiple sizes.',
        images: [
            businessCard, businessCard1, businessCard2, businessCard3, businessCard4
        ],
        options: {
            'Paper Stock': { 'Standard 14pt / 300 GSM': 0, 'Premium 16pt / 350 GSM': 3, 'Luxury 450+ GSM': 8 },
            Sides: { 'One Side': 0, 'Both Sides': 2 },
            Lamination: { 'No Lamination': 0, 'Matt Lamination': 2, 'Gloss Lamination': 2 },
            Corners: { 'Straight Cut': 0, 'Round Corners 3mm': 1.5, 'Round Corners 6mm': 1.5, 'Custom Shape': 5 },
            'Special Effects': { None: 0, 'Spot UV Coating': 4, Embossing: 6, 'Foil Stamping': 7 },
            Quantity: { '50 units': 0, '100 units': 0, '250 units': 8, '500 units': 15, '1000 units': 25 },
        },
    },
    Flyers: {
        basePrice: 12.99,
        desc: 'Eye-catching flyers in multiple sizes and finishes to promote your business, events, or services effectively.',
        images: [Flyer1, Flyer, Flyer2],
        options: {
            Size: { 'A5 (148x210mm)': 0, 'A4 (210x297mm)': 2 },
            'Paper Stock': { 'Economy 115 GSM': 0, 'Standard 135-150 GSM': 2, 'Premium 250-300 GSM': 5 },
            Sides: { 'One Side': 0, 'Both Sides': 2 },
            Lamination: { 'No Lamination': 0, Matt: 2, Gloss: 2 },
            Quantity: { '100 units': 0, '250 units': 7, '500 units': 14, '1000 units': 22 },
        },
    },
    Posters: {
        basePrice: 19.99,
        desc: 'Bold, vibrant posters in multiple sizes to display your brand, events, or promotions with maximum visual impact.',
        images: [Posters, Posters1, Posters2, Posters3],
        options: {
            Size: { '8.5x11"': 0, '11x17"': 3, '12x18"': 4, '24x35"': 12, '12"x12"': 5 },
            'Paper Stock': { '115 GSM (80lb text)': 0, '150 GSM (100lb text)': 2, '200 GSM (80lb cover)': 4, '300 GSM (110lb cover)': 7 },
            Sides: { 'One Side': 0, 'Both Sides': 3 },
            Lamination: { 'No Lamination': 0, Matt: 2, Gloss: 2 },
            Quantity: { '10 units': 0, '25 units': 5, '50 units': 10, '100 units': 18 },
        },
    },
    'Presentation Folders': {
        basePrice: 24.99,
        desc: 'Professional presentation folders that organize your materials with a polished, branded look that impresses clients.',
        images: [PresentationFolder, PresentationFolder1, PresentationFolder2, PresentationFolder3, PresentationFolder4],
        options: {
            Size: { '9x12"': 0, '6"x9"': 0 },
            'Paper Stock': { '250 GSM (10pt)': 0, '300 GSM (12pt)': 2, '350 GSM (14pt)': 4, '400 GSM (16pt)': 6 },
            Pockets: { 'Right Pocket Only': 0, 'Both Pockets': 3 },
            Lamination: { 'No Lamination': 0, Matt: 2, Gloss: 2 },
            'Pocket Depth': { '3 inch': 0, '4 inch': 1, Custom: 3 },
            Quantity: { '25 units': 0, '50 units': 8, '100 units': 15, '250 units': 28 },
        },
    },
    Letterhead: {
        basePrice: 9.99,
        desc: 'Branded letterhead that communicates professionalism in every piece of correspondence you send.',
        images: [Letterhead, Letterhead1, Letterhead2, Letterhead3],
        options: {
            Size: { 'Letter (8.5x11")': 0 },
            'Paper Stock': { 'Standard 100 GSM': 0, 'Executive 120 GSM': 2 },
            Finishing: { 'Straight Cut': 0, 'Padding (100 sheets)': 3, 'Saddle Stitched': 4, Perforation: 2 },
            Quantity: { '100 sheets': 0, '250 sheets': 6, '500 sheets': 12, '1000 sheets': 20 },
        },
    },
    Envelopes: {
        basePrice: 11.99,
        desc: 'Custom-printed envelopes that reinforce your brand identity from the very first touch point.',
        images: [Envelopes, Envelopes1, Envelopes2, Envelopes3, Envelopes4, Envelopes5, Envelopes6],
        options: {
            Size: { '4.25x6.25" (Invitation)': 0, '4.125x9.5" (Standard)': 0, '6"x9"': 1.5, '3.875"x8.875"': 1, '9"x12"': 2, '5.25"x7.25"': 0.5 },
            Sides: { 'One Side': 0, 'Both Sides': 2 },
            Quantity: { '50 units': 0, '100 units': 0, '250 units': 7, '500 units': 13 },
        },
    },
    Notepads: {
        basePrice: 13.99,
        desc: 'Branded notepads that keep your company name on desks and in hands throughout every workday.',
        images: [Notepads1, Notepads2, Notepads3, Notepads4, Notepads5],
        options: {
            Size: { '4x5.5"': 0, '5x8"': 1, '5.5x8.5"': 2, '8.5x11"': 4 },
            'Paper Stock': { '80 GSM (20lb bond)': 0, '90 GSM (24lb bond)': 1, '105 GSM (28lb bond)': 2 },
            Pages: { '25 pages': 0, '50 pages': 3, '100 pages': 6 },
            Quantity: { '10 pads': 0, '25 pads': 6, '50 pads': 12 },
        },
    },
    Brochures: {
        basePrice: 16.99,
        desc: 'Multi-fold brochures that tell your brand story beautifully. Perfect for sales presentations and events.',
        images: [Brochure1, Brochure2, Brochure3, Brochure4, Brochure5],
        options: {
            Size: { '6x9"': 0, '8.5x11"': 2, '8.5x14"': 3, '9x12"': 3, '11x17"': 5 },
            'Paper Stock': { 'Economy 115 GSM': 0, 'Standard 135-150 GSM': 2, 'Premium 250-300 GSM': 6 },
            'Fold Type': { 'Bi-fold': 0, 'Tri-fold': 1, 'Gate Fold': 2, 'Z-fold': 2 },
            Sides: { 'One Side': 0, 'Both Sides': 2 },
            Lamination: { 'No Lamination': 0, Matt: 2, Gloss: 2 },
            Quantity: { '100 units': 0, '250 units': 8, '500 units': 15, '1000 units': 24 },
        },
    },
    Booklets: {
        basePrice: 29.99,
        desc: 'Professional booklets for catalogs, manuals, and marketing collateral with premium binding options.',
        images: [Booklet1, Booklet2, Booklet3, Booklet4, Booklet5],
        options: {
            Size: { '5.5x8.5"': 0, '8.5x11"': 4, '6x9"': 2 },
            Pages: { '4+4 inner': 0, '4+8 inner': 4, '4+12 inner': 7, '4+24 inner': 12, '4+48 inner': 20 },
            'Cover Stock': { 'Self Cover': 0, '200 GSM': 3, '300 GSM': 6 },
            Binding: { 'Saddle Stitch': 0, 'Glued Spine': 3, 'Spiral Binding': 5 },
            Lamination: { 'No Lamination': 0, Matt: 2, Gloss: 2 },
            Quantity: { '10 units': 0, '25 units': 10, '50 units': 18, '100 units': 30 },
        },
    },
    'Promotional Pads': {
        basePrice: 15.99,
        desc: 'Branded writing pads that keep your logo visible and useful on every desk, every day.',
        images: [PromotionalPads1, PromotionalPads2, PromotionalPads3],
        options: {
            Size: { '4x5.5"': 0, '5x8"': 2, '5.5x8.5"': 2, '8.5x11"': 4 },
            'Paper Stock': { 'Economy 70 GSM': 0, 'Standard 100 GSM': 2 },
            Pages: { '25 pages': 0, '50 pages': 3, '100 pages': 6 },
            'Front Cover': { 'No Cover': 0, '200 GSM Cover': 2, '300 GSM Cover': 4 },
            Perforation: { 'No Perforation': 0, 'With Perforation': 1.5 },
            Quantity: { '10 pads': 0, '25 pads': 7, '50 pads': 14 },
        },
    },
    'NCR Forms': {
        basePrice: 18.99,
        desc: 'No Carbon Required multi-part forms ideal for invoices, receipts, and order forms with automatic duplicate copies.',
        images: [Ncrforms1, Ncrforms2, Ncrforms3, Ncrforms4],
        options: {
            Size: { '4.25x5.5"': 0, '5.5x8.5"': 1, '8.5x11"': 2, '8x8.5"': 1.5 },
            Parts: { '2-Part (White+Yellow)': 0, '3-Part (White+Yellow+Pink)': 3, '4-Part (White+Yellow+Pink+Blue)': 6 },
            Sets: { '25 sets': 0, '50 sets': 4, '100 sets': 8 },
        },
    },
    'Paper Bags': {
        basePrice: 22.99,
        desc: 'Elegant branded paper bags with premium handles to turn your packaging into a powerful brand statement.',
        images: [PaperBags1, PaperBags2, PaperBags3, PaperBags4],
        options: {
            Size: {
                '5.5 x 3.25 x 8.375': 0, '5.5 x 3.25 x 13': 2, '8 x 4.75 x 8': 3, '8 x 4.75 x 10.25': 4,
                '10 x 5 x 10': 5, '10 x 5 x 13': 6, '13 x 6 x 16': 8, '13 x 7 x 13': 8,
                '13 x 7 x 17': 9, '14.5 x 9 x 16.25': 10, '16 x 6 x 12': 10, '16 x 6 x 16': 11,
                '16 x 6 x 19': 12, '18 x 7 x 18': 13,
            },
            'Paper Stock': { 'Economy 115 GSM': 0, 'Standard 150 GSM': 2, '200 GSM': 4, 'Premium 250 GSM': 7 },
            Lamination: { 'No Lamination': 0, Matt: 2, Gloss: 2 },
            'Handle Type': { 'Cotton Rope': 0, Ribbon: 1.5 },
            'Special Effects': { None: 0, 'Spot UV': 4, 'Foil Stamping': 6 },
            Eyelets: { 'No Eyelets': 0, 'With Eyelets': 1 },
            Quantity: { '25 units': 0, '50 units': 8, '100 units': 15, '250 units': 28 },
        },
    },
};

export const heroSectionImages = [
    MainHeroImages3,
    MainHeroImages,
    MainHeroImages1,
    MainHeroImages2,
]