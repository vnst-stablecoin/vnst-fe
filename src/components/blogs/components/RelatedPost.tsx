'use client';

import GHOST_DETAIL from '@/types/blogs';
import RelatedThumbnail from './RelatedThumbnail';
import { useTranslationClient } from '@/i18n/client';
import useLang from '@/hooks/useLang';
import dayjs from 'dayjs';

type RelatedPostProps = {
  dataRelatedPost: GHOST_DETAIL[];
};

export default function RelatedPost({ dataRelatedPost }: RelatedPostProps) {
  const { t } = useTranslationClient('blogs');

  return (
    <div>
      <div className='col-span-4 mb-3 mt-[-4px] h-8 font-sf-pro-expanded text-xl font-bold leading-8 text-black'>
        {t('related_post')}
      </div>
      <div className='grid grid-cols-1 gap-4 md:gap-y-4'>
        {dataRelatedPost.map((post: GHOST_DETAIL) => (
          <RelatedThumbnail
            key={post?.id}
            title={post?.title}
            imageFeatured={post?.feature_image}
            tags={post?.tags}
            slug={post?.slug}
            date={dayjs(post?.created_at).format('DD-MM-YYYY')}
          />
        ))}
      </div>
    </div>
  );
}
