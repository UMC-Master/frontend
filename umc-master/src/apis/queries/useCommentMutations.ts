import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getComments, addComment, editComment, deleteComment } from '@apis/commentApi';
import { useUserStore } from '@store/userStore';

export const useAddComment = (tipId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (comment: string) => addComment(tipId.toString(), comment),
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', tipId]);
    },
  });
};

export const useDeleteComment = (tipId: number) => {
  const queryClient = useQueryClient();
  const { user } = useUserStore();
  return useMutation({
    mutationFn: async (commentId: number) => {
      const comments = await getComments(tipId);
      const comment = comments.find((c: any) => c.comment_id === commentId);
      if (comment?.user.user_id !== user?.user_id) {
        throw new Error('본인의 댓글만 삭제할 수 있습니다.');
      }
      return deleteComment(tipId.toString(), commentId.toString());
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', tipId]);
    },
  });
};

export const useUpdateComment = (tipId: number) => {
  const queryClient = useQueryClient();
  const { user } = useUserStore();
  return useMutation({
    mutationFn: async ({ commentId, newComment }: { commentId: number; newComment: string }) => {
      const comments = await getComments(tipId);
      const comment = comments.find((c: any) => c.comment_id === commentId);
      if (comment?.user.user_id !== user?.user_id) {
        throw new Error('본인의 댓글만 수정할 수 있습니다.');
      }
      return editComment(tipId.toString(), commentId.toString(), newComment);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', tipId]);
    },
  });
};
